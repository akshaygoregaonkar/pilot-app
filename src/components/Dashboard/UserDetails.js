import React from 'react'

const style = {
    container: {
        border: '1px solid black', backgroud: '#fff2ff', margin: '5px'
    }
}
export default class UserDetails extends React.Component {
    constructor(Props) {
        super(Props)
        this.state = { UserDetails: [] }

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
            this.setState({ UserDetails: data })
        })
    }
    render() {
        return (
            <React.Fragment>
                <div >
                    {this.state.UserDetails.map((item) => {
                        return (
                            <div style={style.container}>
                                <div>{item.name}</div>
                                <div>{item.email}</div>
                                <div>{item.username}</div>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}