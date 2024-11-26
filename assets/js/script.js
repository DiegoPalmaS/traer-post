async function getPosts() {
    const postContainer = document.getElementById('post-data');
    postContainer.innerHTML = ''; // Limpiar contenido previo

    try {
        // Realizar la consulta a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status}`);
            
        }

        const posts = await response.json();

        // Crear una lista desordenada para mostrar los posts
        const ul = document.createElement('ul');
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            ul.appendChild(li);
        });

        // Añadir la lista al contenedor
        postContainer.appendChild(ul);

    } catch (error) {
        // Manejo de errores
        postContainer.innerHTML = `<p style="color: red;">Ocurrió un error: ${error.message}</p>`;
        console.error('Error:', error);
    }
}