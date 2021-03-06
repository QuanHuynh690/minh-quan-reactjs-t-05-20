import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import ProductItem from "./components/ProductItem";
import SideBar from "./components/SideBar";
import Login from "./components/Login"
import Cart from "./components/Cart"
import dataProduct from "./product.json"


function App() {

  const [sortAZ, setSortAZ] = useState(dataProduct.data)
  const AZ = () => {
  let newProducts=[...sortAZ].sort(function (a, b) {
      return a.name.localeCompare(b.name)
      setSortAZ(newProducts)
    }
    )
  }
 const [propsOnClick,setPropsOnClick]= useState([])
 const getProductToCart=(elm)=>{
    let newPropsOnClick=[...propsOnClick,elm]
    setPropsOnClick(newPropsOnClick)
    console.log(propsOnClick)
 }
  return (

    <Layout >
      <Content>
        {sortAZ.map(elm =>
          <ProductItem {...elm} imageURL={elm.image} 
          clickToAdd={getProductToCart} />)}
        {/* {products.map(e=>
            <ProductItem
            imageURL={e.imageURL}
            type={e.type}
            name={e.name}
            price={e.price}
            discountPrice={e.discountPrice}
            />
            )} */}
      </Content>

      <SideBar onSortAZ={AZ} 

      />

    </Layout>
  );
}

export default App;