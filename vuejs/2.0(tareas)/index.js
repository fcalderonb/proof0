var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Intro Vue tareas',
        tareas: [],
        enlace: 'https://www.google.com.co',
        imagen: 'https://placeimg.com/300/500/nature',
        nuevaTarea: '',


    },
    methods: {
        seton: function (event) {
            event.preventDefault();
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            localStorage.setItem('tareasDB', JSON.stringify(this.tareas));

        },

        cambiarEstado: function (index) {
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem('tareasDB', JSON.stringify(this.tareas));


        },

        eliminarTarea(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('tareasDB', JSON.stringify(this.tareas));
        }


    },
    created(){
        const storage =JSON.parse(localStorage.getItem('tareasDB'));
        this.tareas = storage? storage:[];

    }
})

