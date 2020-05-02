import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as LocalDB from '../database/localDB';
import {
    Link,
  } from "react-router-dom";

import { faArrowLeft, faTrashAlt,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/categoryDetail.css';

export default class CategoryDetail extends React.Component {
    constructor(props) {
        super(props);
        this.renderProducts = this.renderProducts.bind(this);
    }

    componentDidMount() {
        LocalDB.getProductByCategory(this.props.categoryName).then(products => {
            this.props.loadProducts(products);
            console.log('products load from db');
        });
    }

    renderProducts() {
        const {products} = this.props;
        return products.map(product => {
            return (
                <li className="bs-item" key={product.id}>
                    <span className="bs-item-name">
                        <Link to={`/product/` + product.id} className="bs-item-link">
                            {product.name}
                        </Link>
                    </span>
                    <span className="bs-item-qty">{product.qty}</span>
                    <div className="bs-item-actions">
                        <button 
                            type="button" 
                            className="bs-item-button"
                            onClick={()=>this.props.addProduct(product, product.qty)}>
                                +
                            </button>
                        <button 
                            type="button"
                            className="bs-item-button"
                            onClick={() => this.props.removeProduct(product, product.qty)}
                        >
                                -
                        </button>
                        <button 
                            type="button" 
                            className="bs-item-button"
                            onClick={()=>this.props.deleteProduct(product)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                    </div>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="bs-content-wrapper">
                <a className="bs-back-wrapper" onClick={(event) => {
                    window.history.back();
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="bs-category-name">{this.props.categoryName}</span>
                </a>
                <ul className="bs-item-list">
                    {this.renderProducts()}
                </ul>
            </div>
        );
    }
    
}
