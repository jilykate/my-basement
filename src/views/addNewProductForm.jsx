import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/addNewProductForm.css';


export default class AddNewProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.renderToggleButton = this.renderToggleButton.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderMoreFields = this.renderMoreFields.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('productname'));
        const productData = {
            name: data.get('productname').toLowerCase(),
            brand: data.get('brand'),
            expiredDate: data.get('expiredDate') || '',
            desc: data.get('desc') || '',
            qty: parseInt(data.get('qty'), 10) || 1,
            category: this.props.categoryName,
        };
        this.props.addNewProduct(productData);
        event.target.reset();
    }

    renderToggleButton() {
        const {isMoreFieldsVisible} = this.props;
        if (!!isMoreFieldsVisible) {
            return (
                <button type="button" className="addMoreFieldsButton" onClick={this.props.toggleMoreFields}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
            );
        }
        return (
            <button type="button" className="addMoreFieldsButton" onClick={this.props.toggleMoreFields}>
                <FontAwesomeIcon icon={faAngleDown} />
            </button>
        );
    }

    renderMoreFields() {
        const {isMoreFieldsVisible} = this.props;
        if (!isMoreFieldsVisible) {
            return [];
        }

        return (
            <div className="bs-add-product-form-extra">
                <label className="bs-add-product-form-label brandField">
                    brand: <input type="text" name="brand" className="bs-add-product-form-input"/>
                </label>
                <label className="bs-add-product-form-label brandField">
                    quantity: <input type="number" name="qty" className="bs-add-product-form-input" min='0'/>
                </label>
                <label className="bs-add-product-form-label expiredDateField">
                    expiredDate: <input type="date" name="expiredDate" className="bs-add-product-form-input"/>
                </label>
                <label className="bs-add-product-form-label descField">
                    description: <input type="text" name="desc" className="bs-add-product-form-input"/>
                </label>
            </div>
        );
    }

    render() {
        return (
            <div className="bs-add-product-wrapper">
                <form 
                className="bs-add-product-form"
                onSubmit={this.onSubmit}>
                    <input type="text" name="productname" className="addProductInput" required/>
                    <button type="submit" className="addProductButton">
                        add
                    </button>
                    {this.renderToggleButton()}
                    {this.renderMoreFields()}
                </form>
            </div>
        );
    }
}