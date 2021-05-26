import React from 'react'
export default class ChildComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={temp:''}


    }
    AddToParent=()=>{ 
        this.props.callBackParent(this.state.temp)
 }
    render(){
        return(
            <div>
                <h1> Inside Child Component</h1>
                <input type='text'value={this.state.temp} onChange={(evt)=>{ this.setState({temp:evt.target.value})}}/>
                <button type="button" onClick={()=>{this.AddToParent()}}> ADD Data</button>
            </div>
        )
    }
}