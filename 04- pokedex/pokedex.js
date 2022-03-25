/*
    squirtle
    chikorita
    charmander
    charmeleon
    charizard
    tauros

*/

const fetchPokemon = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/`+$('#pokeBuscador').val().toLowerCase();
    
    fetch(url)
    .then((res)=>{
        return res.json();
    }).then((data) =>{
        Pokemon(data);
    }).catch((error) => {
        $('#errors').val(error);
        $('#errors').show(); 
    });
    
}
const Pokemon = (poke) =>{
    console.log(poke);
    $('#pokeImage').attr('src',poke.sprites.front_default);
    $('#pokeName').text('Nombre: '+poke.forms[0].name);

    poke.abilities.map( ( a ) => {
        $('#Pokebody').html('Habilitie'+a.name);
    });

    console.log(poke.forms[0].name);

} 