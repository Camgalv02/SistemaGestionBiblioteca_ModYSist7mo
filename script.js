document.getElementById('registerBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const isbn = document.getElementById('bookISBN').value;

    console.log(`Registrando libro: ${title}, ${author}, ${isbn}`);
    // Aquí puedes agregar la lógica para registrar el libro en la base de datos

    alert('Libro registrado con éxito!');
    document.getElementById('registerBookForm').reset();
});

document.getElementById('registerUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const address = document.getElementById('userAddress').value;
    const phone = document.getElementById('userPhone').value;

    console.log(`Registrando usuario: ${name}, ${address}, ${phone}`);
    // Aquí puedes agregar la lógica para registrar el usuario en la base de datos

    alert('Usuario registrado con éxito!');
    document.getElementById('registerUserForm').reset();
});

document.getElementById('searchBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('searchTitle').value;
    const author = document.getElementById('searchAuthor').value;

    console.log(`Buscando libro: ${title}, ${author}`);
    // Aquí puedes agregar la lógica para buscar el libro en la base de datos
    // Muestra los resultados en el div con id 'searchResults'

    document.getElementById('searchResults').innerText = `Resultados de búsqueda para: ${title}, ${author}`;
});

document.getElementById('lendBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userId = document.getElementById('lendUserId').value;
    const bookId = document.getElementById('lendBookId').value;

    console.log(`Prestando libro ID ${bookId} al usuario ID ${userId}`);
    // Aquí puedes agregar la lógica para prestar el libro en la base de datos

    alert('Libro prestado con éxito!');
    document.getElementById('lendBookForm').reset();
});

document.getElementById('returnBookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const bookId = document.getElementById('returnBookId').value;

    console.log(`Devolviendo libro ID ${bookId}`);
    // Aquí puedes agregar la lógica para devolver el libro en la base de datos

    alert('Libro devuelto con éxito!');
    document.getElementById('returnBookForm').reset();
});
