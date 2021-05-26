import React from 'react'
import UserDetails from './UserDetails'
import Comments from './Comments'
const style={
    container:{
        height:'500px'
    }
}
export default class Dashboard extends React.Component{
    constructor(Props){
        super(Props)
        
        this.state={title:'Dashborard',toggle:false}

    }
    
    handleClick=()=>{

        this.setState({toggle:!this.state.toggle})
    }

    render(){
        let ComponentToDisp=''
        
            if(this.state.toggle){
                ComponentToDisp=(<>
                <h2>User Details</h2>
                <div><UserDetails/></div>
                
            </>)}
            else{
                ComponentToDisp=(<>
                <h2>Comments Details</h2>
                <div><Comments/></div>
                
            </>)}

    
        return(
            <div style={style.container}> 
            <div> <button  onClick={this.handleClick}> Toggle User/Comments</button></div>

{ComponentToDisp}


            </div>
        )
    }
}