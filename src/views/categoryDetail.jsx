import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Link,
  } from "react-router-dom";

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/categoryDetail.css';

export default class CategoryDetail extends React.Component {
    constructor(props) {
        super(props);
        this.renderProducts = this.renderProducts.bind(this);
    }

    renderProducts() {
        const {products} = this.props;
        return products.map(product => {
            return (
                <li className="bs-item" key={product.id}>
                    <span className="bs-item-name">
                        <Link to={`/product/` + product.name}>
                            {product.name}
                        </Link>
                    </span>
                    <span className="bs-item-qty">{product.qty}</span>
                    <div className="bs-item-actions">
                        <button 
                            type="button" 
                            onClick={()=>this.props.addProduct(product.id, product.qty)}>
                                +
                            </button>
                        <button 
                            type="button"
                            onClick={() => this.props.removeProduct(product.id, product.qty)}
                        >
                                -
                            </button>
                    </div>
                </li>
            )
        })
    }

    render() {
        console.log('====CategoryDetail render====');
        console.log(this.props);
        return (
            <div className="bs-content-wrapper">
                <div className="bs-back-wrapper">
                    <Link to={`/`}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                    <span className="bs-category-name">{this.props.categoryName}</span>
                </div>
                <ul className="bs-item-list">
                    {this.renderProducts()}
                </ul>
            </div>
        );
    }
    
}
