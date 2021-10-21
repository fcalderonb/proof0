let changefuncion = () => {
    let boton = document.getElementById('myboton');
    let imagen = document.getElementById('myImage');

    boton.addEventListener('click', () => {
        if (imagen.src === 'https://images.pexels.com/photos/631986/pexels-photo-631986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500') {
            console.log('true');
            imagen.src = 'https://images.pexels.com/photos/1556710/pexels-photo-1556710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

        } else {
            console.log('false');
            imagen.src = 'https://images.pexels.com/photos/631986/pexels-photo-631986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

        }
    })
}
changefuncion();