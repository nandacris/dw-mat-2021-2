import * as React from 'react'

function Name() {
    const [name, setName] = React.useState('')
    return (
        <div>    
            <label htmlFor="name">Name: </label>      
            <input id="name" value={name} onChange={event => setName(event.target.value)} />   
        </div> 
    )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({animal, onAnimalChange}) {
    // 💣 delete this, it's now managed by the App  
    //const [animal, setAnimal] = React.useState('')
    return (
        <div>   
        <label htmlFor="animal">Favorite Animal: </label>     
        <input   
            id="animal"   
            value={animal}
            onChange={onAnimalChange}
        />   
        </div>
    )
}

// 🐨 uncomment this
// function Display({name, animal}) {
//   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
// }

// 💣 remove this component in favor of the new one
function Display({animal}) {
    //return <div>{`Hey ${name}, you favorite animal is ${animal}!`}</div>
    return <div>{`Your favorite animal is ${animal}!`}</div>
}

/*
    Quando passamos uma variável de estado de um componente
    INTERNO para um componente mais EXTERNO, dizemos que houve
    uma ELEVAÇÃO DE ESTADO (state lifting).

    Ao contrário, quando passamos uma variável de estado de um 
    componente EXTERNO de volta a um componente INTERNO, dizemos
    que houve um REBAIXAMENTO DE ESTADO (state colocation)
*/

export default function Exercicio03() { 
    // 🐨 add a useState for the animal 
    // const [name, setName] = React.useState('') 
    const [animal, setAnimal] = React.useState('')

    /*function handleName(event) {
        setName(event.target.value)
    }*/

    /*function handleAnimal(event){
        setAnimal(event.target.value)
    }*/
     
    return (  
        <form>  
            <Name />     
            {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}   
            <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)} />     
            {/* 🐨 pass the animal prop here */}   
            <Display animal={animal} />  
        </form> 
    )
}