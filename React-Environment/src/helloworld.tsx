import * as React from "react"

interface helloworldProps{
    name:string;
}

class HelloWorldClass extends React.Component<helloworldProps,{}>
{
    render(){
        return <div>Hello World {this.props.name}</div>
    }
}

export default HelloWorldClass;
