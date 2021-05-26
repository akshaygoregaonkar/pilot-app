import React from 'react'
const style = {
    container: {
        border: '1px solid black', background: '#fff2ff', margin: '5px'
    }
}
export default class Comments extends React.Component{
    constructor(Props){
        super(Props)
        this.state={CommentDetails:[]}

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments').then(res=>res.json()).then(data=>{
            this.setState({CommentDetails:data})
        })
    }
    render(){
        return(
            <React.Fragment>
            {this.state.CommentDetails.map((item)=>{
                return(
                    <div style={style.container}>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                        <div>{ item.body}</div>
                    </div>
                )
            })    }
        </React.Fragment>        )
    }
}