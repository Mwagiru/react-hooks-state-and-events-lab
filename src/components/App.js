import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  const [toggle, setToggle]= useState(false);
  // this will be used for the Dark Mode Toggle feature
  function toggler(){
    setToggle((toggle)=> !toggle);
  }
  const appClass = toggle ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggler}>{toggle ? "App dark":"App light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
