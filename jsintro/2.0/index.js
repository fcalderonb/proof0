let getSearchData = () =>{
    let botonBuscar = document.getElementById('botonBuscar');
    botonBuscar.addEventListener('click',(event)=>{
        event.preventDefault();
        let valorInput = document.getElementById('searchbox');
        if ( valorInput.value ) {
            document.getElementById('invalidenter').style.display='none';
            getAppiData(valorInput.value);
            
        } else {
            document.getElementById('invalidenter').style.display='block';
            
        }


    })
}

let getAppiData = async (data) =>{
    let urlAppi = `http://www.omdbapi.com/?i=tt3896198&apikey=a970a59a&t=${data}&type=movie&plot=full`
    try {
        let resultSearch = await fetch(urlAppi,{method:'GET'});
        let resultJson=await resultSearch.json();

        console.log(resultJson);
        
        setSearchedData(resultJson);
        
    } catch (error) {
        console.log(error);
        
    }

}

let setSearchedData = (data) =>{

    document.getElementById('posterpel').src=data.Poster;
    document.getElementById('tituloPelicula').innerText=data.Title;
    document.getElementById('yearPelicula').innerText=data.Year;
    document.getElementById('descPelicula').innerText=data.Plot;

}

getSearchData();