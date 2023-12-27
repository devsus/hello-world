import React from 'react'

// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

//Another way to Access props

// const Greet = props => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Hello {props.name} Hi {props.herroName}</h1>
//             {props.children}
//         </div>

//     )
// }

//Another way to Access props

// const Greet = ({name,herroName}) => {
//     console.log(name);
//     return (
//         <div>
//             <h1>Hello {name} Hi {herroName}</h1>
//         </div>

//     )
// }

//Another way to Access props
const Greet = props => {
    const  {name,herroName} = props
    return (
        <div>
            <h1>Hello {props.name} Hi {props.herroName}</h1>
           
        </div>

    )
}

export default Greet