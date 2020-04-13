import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link 
} from "react-router-dom";
import CategoryList from './views/categoryList';
import  CategoryDetail from './views/categoryDetail';
import {ProductDetail} from './views/productDetail';


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
    return <CategoryDetail {...detailPageProps} />;
  }

  function ProductDetailPage() {
    let { productName } = useParams();
    let detailPageProps = {productName};
    return <ProductDetail {...detailPageProps} />;
  }