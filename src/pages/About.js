import React from 'react'
import DocumentMeta from 'react-document-meta'

export default class About extends React.Component {

    render() {
        return (
            <div>
                <DocumentMeta title="Site Title | About" description="Description goes here" />
                <h1>Hello, world.</h1>
                <p>This is the about page</p>
            </div>
        )
    }
}
