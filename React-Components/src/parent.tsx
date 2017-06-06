import * as React from "react"
import ChildClass from "./child"

interface ParentState{
    var1?:string,
    var2?:string,
    textFromChild?:string
}

class ParentClass extends React.Component<{},ParentState>
{
    constructor(props:any){
        super(props);
        this.state={
            var1:"Variable 1 in its initial state",
            var2:"Variable 2 in its initial state"
        };
    }

    updateTextFromParent(){
        this.setState({
            var1:"Variable 1 updated by parent method"});
    }

    changeHandler(value:string) {
         this.setState({
            var2:"Variable 2 updated with value passed from child - " + value});
        
    }

    render(){
    
        return <div>
                    Parent :
                    <div>Var1 Value : <b>{this.state.var1}</b></div>
                    <input onClick={this.updateTextFromParent.bind(this)} type="button"/> Update-Var1

                    <div> Child : </div>

                    <ChildClass childName={this.state.var2} changeHandler={this.changeHandler.bind(this)}/>

            </div>
    }
}

export default ParentClass;
