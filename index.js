import React from 'react'
import * as ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { 
    applyRouterMiddleware,
    browserHistory,
    Router, 
    Route, 
    IndexRoute,
    createMemoryHistory, 
    RoutingContext,
    match
} from 'react-router'
import { useScroll } from 'react-router-scroll'
import DocumentMeta from 'react-document-meta'

// Pages
import App from './src/App';
import About from './src/pages/About';
import Products from './src/pages/Products';
import ProductDetail from './src/pages/ProductDetail';

import data from './src/exampleData/ProductData';

const HTML = require('./html.js').default

const Routes = (
    <div>
        <Route path="/" component={App} data={data}>
            <IndexRoute component={About} />
            <Route path="products" component={Products} />
            <Route path="product/:id" component={ProductDetail} />
        </Route>
    </div>
)

//Client side code
if (typeof document !== 'undefined') {
    ReactDOM.render(
        <Router
            history={browserHistory}
            render={applyRouterMiddleware(useScroll())}
            routes={Routes}
        />,
        document.getElementById('content'))
}

//Server side code
export default function render(locals, callback) {    
    const history = createMemoryHistory(locals.path)

    //Render app to string to be used later
    const app = {
        __html: ReactDOMServer.renderToString(
            <Router history={history}>{Routes}</Router>
        )
    }

    //Retrieve all metadata as React components so it can be rendered inside the <head> tags
    const meta = DocumentMeta.renderAsReact()

    //Render the outer HTML and pass the already rendered app and metadata as props
    // to be inserted in the right place by HTML.js component
    callback(null, '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(<HTML meta={meta} app={app} />))
}
