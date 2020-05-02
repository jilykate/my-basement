import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useParams, 
} from "react-router-dom";
import CategoryListContainer from './containers/categoryListContainer';
import CategoryContainer from './containers/categoryContainer';
import ProductContainer from './containers/productContainer';
import AddNewProductFormContainer from './containers/addNewProductFormContainer';


export default class MyBasementRouter extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log('====MyBasementRouter didmount====');
    }

    render() {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" children={<CategoryListContainer />} />
              <Route path="/category/:categoryName" children={<CategoryDetailPage />} />
              <Route path="/product/:productId" children={<ProductDetailPage />} />
            </Switch>
          </div>
        </Router>
      );
    }
}

  function CategoryDetailPage() {
    let { categoryName } = useParams();
    let detailPageProps = {categoryName};
    return (
      <div>
        <CategoryContainer {...detailPageProps} key="categoryContainer"/>
        <AddNewProductFormContainer {...detailPageProps} key="addnewproductscontainer"/>
      </div>
    );
  }

  

  function ProductDetailPage() {
    let { productId } = useParams();
    let detailPageProps = {productId};
    return <ProductContainer {...detailPageProps} />;
  }