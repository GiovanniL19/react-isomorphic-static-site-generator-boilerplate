import React from 'react'
import DocumentMeta from 'react-document-meta'

export default class ProductDetail  extends React.Component {

    render() {
        const id = this.props.params.id
        const data = this.props.data
        const product = data[data.findIndex(p => p.id == id)]

        return (
            <span>
                <DocumentMeta title={'Site Title | ' + product.name + ' Detail'} description="Description of product goes here" />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <img src={product.imgBig} alt={product.name + ' Big Photo'} />
            </span>
        )
    }
}