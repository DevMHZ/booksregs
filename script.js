// Show book details when clicking the "إظهار التفاصيل" button
// Show or hide book details when clicking the "إظهار التفاصيل" button
function toggleDetails(bookNumber) {
    // Get the details container of the clicked book
    var details = document.getElementById('details' + bookNumber);

    // Toggle the display between block and none
    if (details.style.display === 'block') {
        details.style.display = 'none'; // Hide the details if they are currently visible
    } else {
        details.style.display = 'block'; // Show the details if they are currently hidden
    }
}


// Ensure that all details are hidden by default
document.addEventListener('DOMContentLoaded', function () {
    var allDetails = document.querySelectorAll('.book-details');
    allDetails.forEach(function (detail) {
        detail.style.display = 'none'; // Hide all details on page load
    });
});

// Handle form submission and display success message
document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Check if a book is selected
    var selectedBook = document.querySelector('input[name="book"]:checked');
    if (!selectedBook) {
        alert("يرجى اختيار كتاب!");
        return;
    }

    // Get the chosen book title
    var bookTitle = selectedBook.value;

    // Display success message
    document.getElementById('chosenBook').textContent = bookTitle;

    // Hide the form and show the success message
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
});

// Show the form to register for the book
function showForm() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none'; // Hide success message if form is shown
}
