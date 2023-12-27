import React from "react";

const Hello = () => {
    // return(
    //    <div>
    //     <h1>Hello Vishwas !</h1>
    //    </div>
    // )

    //Another way to create elements 
    return React.createElement('div',
    {id:'hello',className: 'dummyClass'},
    React.createElement('h1',null,'Hello Devendra !'))
}

export default Hello;