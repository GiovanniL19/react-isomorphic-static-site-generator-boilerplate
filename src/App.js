import React from 'react'

export default class App extends React.Component {

    render() {
        //Pass the global application data to all children as props
        var children = React.cloneElement(this.props.children, { data: this.props.route.data })

        return (
            <div>
                NAVIGATION HERE
                {children}
                FOOTER HERE
            </div>
        )
    }
}
