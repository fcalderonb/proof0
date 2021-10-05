Vue.component('crear-tareas', {
    props:{
        tareas:Array
    },
    template: `
                    

                        </div>
                        <!-- Muestra -->
                        <div class="mt-5">
                            <div class="row text-center align-items-center alert alert-light" role="alert">
                                <div class="col-12 col-md-4 ">
                                    <span>
                                        Nombre
                                    </span>
                                </div>
                                <div class="col-12 col-md-4 ">
                                    <span>
                                        Estado
                                    </span>
                                </div>
                                <div class="col-12 col-md-4 ">
                                    <span>
                                    Acciones
                                    </span>
                                </div>
                            </div>
                            <div v-for="(item,index) in tareas" key="index" :class="['row', 'text-center', 'align-items-center', 'alert', item.estado? 'alert-success' : 'alert-danger']" role="alert">
                                <div class="col-12 col-md-4 ">
                                    <span>
                                        {{item.nombre}}
                                    </span>
                                </div>
                                <div class="col-12 col-md-4 ">
                                    <span >
                                        {{item.estado ? 'Completada' : 'Pendiente'}}
                                    </span>
                                </div>
                                <div class="col-12 col-md-4 ">
                                    <button @click="cambiarEstado(index)" class="btn btn-light btn-sm">Cambiar Estado</button>
                                    <button @click="$emit('eliminar',index)" class="btn btn-dark btn-sm">Eliminar</button>
                                </div>
                            </div>
                            
                        </div>
              `,
    data() {
        return {
            
        }

    },
    methods: {
        cambiarEstado: function (index) {
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem('tareasDB', JSON.stringify(this.tareas));


        },

        
        


    },
    created() {
        

    }

})