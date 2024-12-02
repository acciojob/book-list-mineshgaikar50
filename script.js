const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

// Event Listener for Form Submission
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  // Validate input fields
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a new row in the table
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Append the row to the book list
  bookList.appendChild(row);

  // Clear input fields
  bookForm.reset();
});

// Event Listener for Deleting a Book Row
bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to delete this book?')) {
      const row = e.target.parentElement.parentElement;
      bookList.removeChild(row);
    }
  }
});