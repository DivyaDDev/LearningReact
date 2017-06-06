import * as React from "react"

interface ChildInterface{
    childName:string,
    changeHandler:any
}

class ChildClass extends React.Component<ChildInterface,{}>
{
    constructor(){
        super();
    }
    
    changeHandler(e:any) {
            this.props.changeHandler("a");   
    }

    render(){
        return <div>CHILD - This Variable Came from Parent : <b> {this.props.childName}</b>
        <input onClick={this.changeHandler.bind(this)} type="button"/> Call-Parent-From-Child

        <div>CHILD - Value Updated By Parent Function : <b>{this.props.childName}</b></div>
        </div>
    }
}

export default ChildClass;
