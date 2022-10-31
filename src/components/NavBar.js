import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const mapOver= links.map((element,index)=>{
  <a href={element} key ={index}>{element} </a>
})
  return <nav>
    {mapOver}
  </nav>;
}

export default NavBar;
