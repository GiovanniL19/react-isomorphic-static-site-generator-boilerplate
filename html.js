//This component runs only during static site generation
import React from 'react'

export default class Html extends React.Component {

    render() {
        return (
            <html lang="en">

                <head>
                    {this.props.meta}
                </head>

                <body>
                    <div id="content" dangerouslySetInnerHTML={this.props.app} />
                    <script type="text/javascript" src="/bundle.js" charSet="utf-8"></script>
                </body>

            </html>
        )
    }
}
