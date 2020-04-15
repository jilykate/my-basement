import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useParams, 
} from "react-router-dom";
import CategoryListContainer from './containers/categoryListContainer';
import {ProductDetail} from './views/productDetail';
import CategoryContainer from './containers/categoryContainer';


export default function MyBasementRouter() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <CategoryListContainer />
            </Route>
            <Route path="/category/:categoryName" children={<CategoryDetailPage />} />
            <Route path="/product/:productName" children={<ProductDetailPage />} />
          </Switch>
        </div>
      </Router>
    );
  }

  function CategoryDetailPage() {
    let { categoryName } = useParams();
    let detailPageProps = {categoryName};
    return <CategoryContainer {...detailPageProps} />
  }

  function ProductDetailPage() {
    let { productName } = useParams();
    let detailPageProps = {productName};
    return <ProductDetail {...detailPageProps} />;
  }