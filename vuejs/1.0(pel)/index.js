var app = new Vue({
    el :'#app',
    data : {
        titulo : 'Intro Vue pelis',
        peli:{},
        peliculas: [],
        enlace: 'https://www.google.com.co',
        imagen : 'https://placeimg.com/300/500/nature',
        palabraBuscar:'',


    },
    methods: {
        reverseMessage: function () {
          this.titulo = this.titulo.split('').reverse().join('')
        },
        async getAppiData (event) {
            let urlAppi = `http://www.omdbapi.com/?i=tt3896198&apikey=a970a59a&t=${this.palabraBuscar}&plot=full`
            event.preventDefault();
            try {
                let resultSearch = await fetch(urlAppi,{method:'GET'});
                let resultJson=await resultSearch.json();

                this.peliculas.push(resultJson);
                this.peli=resultJson;
        
                
            } catch (error) {
                console.log(error);
                
            }
        
        }


      }
})

