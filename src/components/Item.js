import React, { useState } from "react";

function Item({ name, category }) {
const [itemsInCart, setItemsInCart]=useState(false);
function handleItems(){
  setItemsInCart((itemsInCart)=> !itemsInCart);
}
  return (
    <>
    <li className={itemsInCart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemsInCart? "remove":"add"} onClick={handleItems}>{itemsInCart? "Remove From Cart": "Add To Cart"}
      </button>
    </li>
    </>
  );
}

export default Item;
