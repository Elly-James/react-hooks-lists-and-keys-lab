import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const disp = links.map((item)=> {
    return <a key= {item} href={`#${item}`}>{item}</a>
  })

  return (
    <>
    <nav> 
      {disp}

    </nav>;
    </>
    

  )
}

export default NavBar;
