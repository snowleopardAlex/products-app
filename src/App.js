// Props can't be duplicated! 
import React from 'react';
import Product from "./Product";
import productsData from "./productsData";

function App() {
  const productsComponent =  productsData.map(item => 
  <Product key={item.id} product={item}  />) 
  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1>Products</h1>
       {productsComponent}
    </div>
  );
}

export default App;
