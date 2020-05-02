import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/categoryDetail.css';

export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadProduct(this.props.productId);
    }

    render() {
        const {product} = this.props;
        return (
            <div className="bs-content-wrapper">
                <div className="bs-back-wrapper">
                    <Link to={`/`}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                    <span className="bs-category-name">{product.name}</span>
                </div>
                this is info about {product.name}
                <ul className="bs-product-detail">
                    <li>
                        name: {product.name}
                    </li>
                    <li>expire date: {product.expiredDate}</li>
                    <li>description: {product.desc}</li>
                    <li>qty: {product.qty}</li>
                    <li>brand: {product.brand}</li>
                </ul>
            </div>
        );
    }
    
}
