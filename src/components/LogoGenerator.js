import React, { useState } from "react";
import LogoDesign from "./LogoDesign";
import "./LogoGenerator.css";

export default function LogoGenerator(){

  const [text,setText] = useState("");
  const [subtext,setSubtext] = useState("");
  const [showLogo,setShowLogo] = useState(false);
  const [count,setCount] = useState(0);

  const generateLogo = ()=>{

    if(!text || !subtext){
      alert("Enter brand name and tagline");
      return;
    }

    if(count >= 3){
      alert("Free limit reached. Contact Surya for premium logo designs.");
      return;
    }

    setShowLogo(true);
    setCount(count+1);

  };

  return(

    <div className="logo-container">

      <h2>Duma Groups AI Logo Generator</h2>

      <input
      placeholder="Brand Name"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />

      <input
      placeholder="Tagline"
      value={subtext}
      onChange={(e)=>setSubtext(e.target.value)}
      />

      <button onClick={generateLogo}>
        Generate Logo
      </button>

      {showLogo &&
        <LogoDesign text={text} subtext={subtext}/>
      }

    </div>

  )

}