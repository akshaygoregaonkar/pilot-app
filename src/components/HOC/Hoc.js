import React from 'react'
const HocSetColor=(color)=> (WrappedComponent) => {
    return class extends React.Component {
        constructor(Props) {
            super(Props)
            this.state = {
                backColor: {
                    color: color
                }
            }
        }
        render() {
             return <WrappedComponent {...this.props} backColor={this.state.backColor} />
        }
    }
}
export default HocSetColor