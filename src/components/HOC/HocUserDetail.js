import React from 'react'

const HocUserDetail =(WrappedComponents)=>{
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                UserDetail: []
            }
        }
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
                this.setState({ UserDetail:data })
            })
        }
        render() {
            return <WrappedComponents {...this.props} ListItems={this.state.UserDetail} />
        }
    }
}

export default HocUserDetail