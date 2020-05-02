import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import * as localDB from '../database/localDB';
import { faBreadSlice, faCocktail, faHandSparkles, faBath, faBaby, faCat } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/categoryList.css';

export default class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.renderListItem = this.renderListItem.bind(this);
    }

    componentDidMount() {
        console.log('categorylist component did mount');
        localDB.getAllCategories().then(categories => {
            console.log(categories);
            this.props.loadCategories(categories);
        });
    }

    componentWillUnmount() {
        console.log('categoryList component will unmount');
    }

    renderListItem(item) {
        return (
            <li key={"category_" + item.id}>
                <Link to={"/category/" + item.url_string} className="bs-category">
                    <span className="bs-category-icon">
                        <FontAwesomeIcon icon={item.icon_string} />
                    </span>
                    <span className="bs-category-name">{item.name}</span>
                </Link>
            </li>
        );
    }

    render () {
        const {categories} = this.props;
        return (
            <div className="bs-content-wrapper">
                <ul className="bs-category-list">
                    {
                        categories.map((category) => this.renderListItem(category))
                    }
                </ul>
            </div>
        );
    }
}
