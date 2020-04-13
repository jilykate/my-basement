import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import { faBreadSlice, faCocktail, faHandSparkles, faBath, faBaby, faCat } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/categoryList.css';

function CategoryList() {
  return (
    <div className="bs-content-wrapper">
        <ul className="bs-category-list">
            <li>
                <Link to="/category/food" className="bs-category">
                    <span className="bs-category-icon">
                        <FontAwesomeIcon icon={faBreadSlice} />
                    </span>
                    <span className="bs-category-name">Food</span>
                </Link>
            </li>
            <li>
                <Link to="/category/drinks" className="bs-category">
                    <span className="bs-category-icon">
                        <FontAwesomeIcon icon={faCocktail} />
                    </span>
                    <span className="bs-category-name">Drinks</span>
                </Link>
            </li>
            <li>
                <Link to="/category/babycare" className="bs-category">
                    <span className="bs-category-icon">
                        <FontAwesomeIcon icon={faBaby} />
                    </span>
                    <span className="bs-category-name">Baby Care</span>
                </Link>
            </li>
            <li>
                <Link to="/category/personalcare" className="bs-category">
                    <span className="bs-category-icon">
                        <FontAwesomeIcon icon={faBath} />
                    </span>
                    <span className="bs-category-name">Personal Care</span>
                </Link>
            </li>
            <li>
                <Link to="/category/housecare" className="bs-category">
                    <span className="bs-category-icon">
                        <FontAwesomeIcon icon={faHandSparkles} />
                    </span>
                    <span className="bs-category-name">House Care</span>
                </Link>
            </li>
            <li>
                <Link to="/category/others" className="bs-category">
                    <span className="bs-category-icon">
                        <FontAwesomeIcon icon={faCat} />
                    </span>
                    <span className="bs-category-name">Others</span>
                </Link>
            </li>
        </ul>
    </div>
  );
}

export default CategoryList;
