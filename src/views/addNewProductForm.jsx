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
        this.renderProductNameInput = this.renderProductNameInput.bind(this);
    }

    componentDidMount() {
        this.props.closeMoreFields();
    }

    onSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('productname'));
        const productData = {
            name: data.get('productname').toLowerCase(),
            brand: data.get('brand') || '',
            expiredDate: data.get('expiredDate') || '',
            desc: data.get('desc') || '',
            qty: parseInt(data.get('qty'), 10) || 1,
            category: this.props.categoryName || '',
        };
        this.props.addNewProduct(productData);
        event.target.reset();
    }

    renderToggleButton() {
        const {isMoreFieldsVisible} = this.props;
        if (!!isMoreFieldsVisible) {
            return (
                <button type="button" className="addMoreFieldsButton" onClick={this.props.toggleMoreFields} key="addMoreFieldsButtonUp">
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
            );
        }
        return (
            <button type="button" className="addMoreFieldsButton" onClick={this.props.toggleMoreFields} key="addMoreFieldsButtonDown">
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
                    <b>brand:</b> <input type="text" name="brand" className="bs-add-product-form-input"/>
                </label>
                <label className="bs-add-product-form-label brandField">
                    <b>quantity:</b> <input type="number" name="qty" className="bs-add-product-form-input" min='0'/>
                </label>
                <label className="bs-add-product-form-label expiredDateField">
                    <b>expiredDate:</b> <input type="date" name="expiredDate" className="bs-add-product-form-input"/>
                </label>
                <label className="bs-add-product-form-label descField">
                    <b>description:</b> <input type="text" name="desc" className="bs-add-product-form-input"/>
                </label>
            </div>
        );
    }

    renderProductNameInput() {
        const {productName} = this.props;
        console.log('====renderProductNameInput====', this.props);
        if (productName) {
            return (
                <input type="text" name="productname" className="addProductInput" value={this.props.productName} readOnly/>
            );
        }

        return (
            <input type="text" name="productname" className="addProductInput" required/>
        )
    }

    render() {
        return (
            <div className="bs-add-product-wrapper">
                <form 
                className="bs-add-product-form"
                onSubmit={this.onSubmit}>
                    {this.renderProductNameInput()}
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