import React from 'react'
import DocumentMeta from 'react-document-meta'
import { Link } from 'react-router'


class ProductTile extends React.Component {
    render() {
        return (
            <span>
                <DocumentMeta title="Site Title | List of Products" description="All our products description goes here" />
                <Link to={`/product/${this.props.data.id}/`}>
                    <h2>{this.props.data.name}</h2>
                    <img src={this.props.data.img} alt={this.props.data.name + ' Photo'} />
                </Link>
            </span>
        )
    }
}


export default class Products extends React.Component {
    render() {
        const data = this.props.data

        const productNodes = data.map(function (product) {
            return (
                <ProductTile key={product.id} data={product} />
            )
        })

        return (
            <span>
                <h1>Products</h1>
                {productNodes}
            </span>
        )
    }
}
