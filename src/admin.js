const API_URL = 'http://localhost:5000/api/contact';

// Fetch all messages
async function fetchMessages() {
  const tbody = document.getElementById('messages-body');
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    
    tbody.innerHTML = ''; // Clear loading text
    
    if (result.success && result.data.length > 0) {
      result.data.forEach(msg => {
        const tr = document.createElement('tr');
        const dateObj = new Date(msg.createdAt);
        const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString();

        tr.innerHTML = `
          <td>${dateStr}</td>
          <td><strong>${msg.name}</strong></td>
          <td><a href="mailto:${msg.email}">${msg.email}</a></td>
          <td><a href="tel:${msg.phone}">${msg.phone}</a></td>
          <td class="message-cell">${msg.message}</td>
          <td>
            <button class="delete-btn" onclick="deleteMessage('${msg._id}')">
              <i class="fa-solid fa-trash"></i> Delete
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    } else {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem;">No messages available.</td></tr>';
    }
  } catch (error) {
    console.error('Error fetching messages:', error);
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #ea4c89;">Failed to load messages. Is the server running?</td></tr>';
  }
}

// Delete a message by Mongo ID
window.deleteMessage = async (id) => {
  if (!confirm('Are you sure you want to permanently delete this message?')) return;
  
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    
    if (result.success) {
      // Re-fetch UI
      fetchMessages();
    } else {
      alert('Failed to delete: ' + result.error);
    }
  } catch (error) {
    console.error('Error deleting message:', error);
    alert('Failed to connect to the backend server.');
  }
};

// Initial load
fetchMessages();