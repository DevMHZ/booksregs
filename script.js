
function toggleDetails(bookNumber) {
    var details = document.getElementById('details' + bookNumber);
    if (details.style.display === 'block') {
        details.style.display = 'none'; 
    } else {
        details.style.display = 'block'; 
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var allDetails = document.querySelectorAll('.book-details');
    allDetails.forEach(function (detail) {
        detail.style.display = 'none'; 
    });
});

document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var selectedBook = document.querySelector('input[name="book"]:checked');
    if (!selectedBook) {
        alert("يرجى اختيار كتاب!");
        return;
    }

    var bookTitle = selectedBook.value;

    document.getElementById('chosenBook').textContent = bookTitle;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
});

function showForm() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none'; 
}
