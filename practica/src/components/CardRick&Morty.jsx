import React from "react";

//El componente rick&MortyCard recibe un objeto character como prop y lo desestructura para obtener sus propiedades

const MortyCharacter = ({character}) => {

    return (
        <>
        <div className="max-x-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-4" >
            <img
            className="h-65 object-cover nx-auto"
            src={character.image}
            alt={character.name}
            />
    
        </div>

        <div className="px-6 py-4">
 <h2 className="font-bold text-xl mb-2 text-gray-8000">{character.name}</h2>
 <p className="text-gray-600 text-sm mb-4">{character.status}</p>
<div className="text-gry-700 text-sm">


<p>

    <span className="font-semibold">Species:</span> {character.species}
</p>
<p>

    <span className="font-semibold">Gender:</span> {character.gender}
</p>
<p>

    <span className="font-semibold">Origin:</span> {character.origin.name}
</p>
<p>

    <span className="font-semibold">Location:</span> {character.location.name}
</p>




</div>
</div>

        </>
    );
};

export default MortyCharacter