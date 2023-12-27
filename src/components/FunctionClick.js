import React from "react";

// export default () =>{

//     function clickHandler(){
//         console.log("Button clicked !")
//     }

//     return(
//         <div>
//             <button onClick={clickHandler}>Click ! me</button>
//         </div>
//     )
// }

//Another way we can do using Java script 

function FunctionClick(){

    function clickHandler(){
        alert("clicked !")
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick