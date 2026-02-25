import Product from "../components/Products";
import "./Catalog.css";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // To hold the category list
  const [prodsToDisplay, setProdsToDisplay] = useState([]); // To hold the products to show

  //useEffect runs when the component loads
  useEffect(function () {
    console.log("component loaded!");
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let data = service.getProducts();
    setProducts(data);
    setProdsToDisplay(data); // Initially, display all products

    // Extract unique categories from products
    let cats = [...new Set(data.map(prod => prod.category))];//Ellos lo hardcodearon
    setCategories(cats);
  }

  function clearFilter() {
    setProdsToDisplay(products);
  }

  function filter(category) {
    let list = [];
    // Find the products that match the category
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    setProdsToDisplay(list);
  }

  return (
    <div className="catalog px-5 bg-light">
      <h1 className="text-center">Check our amazing products</h1>
      <div className="filters">
        <button onClick={clearFilter} className="btn btn-dark btn-filter">All</button>
        {categories.map(cat => <button key={cat} onClick={() => filter(cat)} className="btn btn-primary btn-filter">{cat}</button>)}
      </div>

      <hr />

      <div className="product-list d-flex gap-4 pb-4">
        {prodsToDisplay.map(prod => <Product key={prod._id} data={prod}/>)}
      </div>
    </div>
  );
}

export default Catalog;
