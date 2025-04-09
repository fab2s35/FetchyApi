import {useState, useEffect} from "react"
import CardRickandMorty from "../components/CardRick&Morty"

const RickAndMorty =  () => {
const apiUrl = "https://rickandmortyapi.com/api/character"; //url de la api
const [characters, setCharacters] = useState([]) // Estado para almacenar los datos consultados
const [loading, setLoading] = useState(true) //Estado para manejar la carga de datos

//Codigo para cargar los personajes de la api
const fetchCharacters = async () => {
    try {
    
    const response = await fetch(apiUrl)
    const data =  await response.json()
    console.log(data)
    setCharacters(data.results)

} catch (error) {
    
    console.error('Error fetching characters:',  error)
}finally{
    setLoading(false)
}
}

//Codigo para cargar los personajes al iniciar la página

useEffect (() => {
fetchCharacters()
}, []) //Este código solo se ejecutará a primera vez que se cargue, ya que el [] de dependencias esta vacio

return (


<div>

<h1 className="text-center text-2xl">Personajes</h1>
{loading ? (
    <p>Cargando personajes ...</p>
) : (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols 3 lg:grid-cols-4 gap-4">
    {characters.map ((character) => (
        <CardRickandMorty key = {character.id} character={character}/>

    ) )} 
    </div>
)
}
</div>

)
}

export default RickAndMorty