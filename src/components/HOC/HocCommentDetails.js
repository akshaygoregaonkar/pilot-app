import React from 'react'
const HocCommentDetail=(WrappedComponents)=>{
    return class extends React.Component {
        constructor(Props) {
            super(Props)
            this.state = {
                CommentDetails:[]
            }

        }
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(data => {
                this.setState({ CommentDetails:data})
            })
        }
        render() {
            return <WrappedComponents {...this.props} ListItems={this.state.CommentDetails} />
        }
    }
}

export default HocCommentDetail