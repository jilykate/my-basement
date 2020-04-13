import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useParams, 
} from "react-router-dom";
import CategoryList from './views/categoryList';
import {ProductDetail} from './views/productDetail';
import CategoryContainer from './containers/categoryContainer';


export default function MyBasementRouter() {
    return (
      <Router>
        <div>
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <CategoryList />
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