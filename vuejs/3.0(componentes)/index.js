

var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Intro Vue tareas',
        tareas: [],
        nuevaTarea: ''
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

        eliminarTarea(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('tareasDB', JSON.stringify(this.tareas));
        }

    },
    created() {
        const storage = JSON.parse(localStorage.getItem('tareasDB'));
        this.tareas = storage ? storage : [];
    }
})

