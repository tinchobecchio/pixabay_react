import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";


function App() {

  // state de la app
  const [ busqueda, guardarBusqueda ] = useState('')
  const [ imagenes, guardarImagenes ] = useState([])

  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === '') return
  
      const imagenesPorPagina = 30
      const key = '35013703-bbdb7421a2ccf3777b697161f'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`
  
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      guardarImagenes(resultado.hits);
    }
    consultarApi()

  },[busqueda])




  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        />
      </div>
    </div>
  );
}

export default App;
