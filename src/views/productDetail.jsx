import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/productDetail.css';

export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.renderProductInfo = this.renderProductInfo.bind(this);
    }

    componentDidMount() {
        this.props.loadProductByName(this.props.productName);
    }

    renderProductInfo(product) {
        console.log('====renderProductInfo====', product);
        return (
            <ul className="bs-product-detail" key={product.uniqueLabel}>
                <li className="bs-product-detail-item">
                    <b>name:</b> {product.name}
                </li>
                <li className="bs-product-detail-item"><b>expire date:</b> {product.expiredDate}</li>
                <li className="bs-product-detail-item"><b>description:</b> {product.desc}</li>
                <li className="bs-product-detail-item"><b>qty:</b> {product.qty}</li>
                <li className="bs-product-detail-item"><b>brand:</b> {product.brand}</li>
            </ul>
        );
    }

    renderUniqueProduct(uniqueKey, products) {
        return (
            <div>
                <p>{uniqueKey}</p>
                {products.map(product => this.renderProductInfo(product))}
            </div>
        )
    }

    render() {
        const {products} = this.props;
        console.log('==== productdetail ====');
        console.log(products);
        return (
            <div className="bs-content-wrapper">
                <a className="bs-back-wrapper" onClick={(event) => {
                    console.log('goback');
                    window.history.back();
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="bs-category-name">{this.props.productName}</span>
                </a>
                {
                    Object.keys(products).map(key => { 
                        return this.renderUniqueProduct(key, products[key]);  
                    })
                }
            </div>
        );
    }
    
}
