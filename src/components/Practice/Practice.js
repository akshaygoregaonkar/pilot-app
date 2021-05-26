import React from 'react'
export default class Practice extends React.Component{
    constructor(props){
        super(props)
this.state={List:[]}
    }
    setData=(evt)=>{
        this.setState({List:[...this.state.List,evt.target.value]})
    }
    render(){
        return(
            <div>
                <input type="text"  onChange={this.setData}> </input>
                <button onClick={()=>{this.addData()}}></button>
            </div>
        )
    }
}