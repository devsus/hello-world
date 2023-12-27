import React,{Component} from "react";

// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} a.k.a {this.props.herroName}</h1>
//     }

// }

//Another way we can access props
class Welcome extends Component{
    render(){
        const {name,herroName} = this.props
        //const {state1,state2} = this.state
        return <h1>Welcome {name} a.k.a {herroName}</h1>
    }

}

export default Welcome