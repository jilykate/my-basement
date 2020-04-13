import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Link,
  } from "react-router-dom";

import { faBreadSlice, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/categoryDetail.css';

export default class CategoryDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bs-content-wrapper">
                <div className="bs-back-wrapper">
                    <Link to={`/`}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                    <span className="bs-category-name">{this.props.categoryName}</span>
                </div>
                <ul className="bs-item-list">
                    <li className="bs-item">
                        <span className="bs-item-name">
                            <Link to={`/product/apple`}>
                                apple
                            </Link>
                        </span>
                        <span className="bs-item-qty">3</span>
                        <div className="bs-item-actions">
                            <button type="button">+</button>
                            <button type="button">-</button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
    
}

// export default categoryDetail;
