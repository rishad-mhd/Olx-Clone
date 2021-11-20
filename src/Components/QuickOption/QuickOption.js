import React, { useState } from 'react'
import Arrow from '../../assets/Arrow'
import './QuickOption.css'
function QuickOption() {
  const [clicked,setclick] = useState(true);
  const categoryclicked = ()=>{
    if (clicked){
      setclick(false)
    }else{
      setclick(true)
    }
  }
    return (
        <div>
            <div className="menuBar">
          <div onClick={categoryclicked} className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <div style={clicked?{display:'inline-block',transition:".5s"}:{transform:'rotate(180deg)',display:'inline-block',transition:".5s"}}>
              <Arrow></Arrow></div> 
          </div>
          <div className={clicked ? "all-categories clicked" : "all-categories"} >
          <span><a href="/categories/Cars" className="quickOption">Cars</a></span><br />
            <span><a href="/categories/Motorcycles" className="quickOption">Motorcycles</a></span><br />
            <span><a href="/categories/Mobiles" className="quickOption">Mobile Phones</a></span><br />
            <span><a href="/categories/For Sale:Houses & Apartments" className="quickOption">For Sale:Houses & Apartments</a></span><br />
            <span><a href="/categories/Scooters" className="quickOption">Scooters</a></span><br />
            <span><a href="/categories/Commercial & Other Vehicles" className="quickOption">Commercial & Other Vehicles</a></span><br />
            <span><a href="/categories/For Rent: House & Apartments" className="quickOption">For Rent: House & Apartments</a></span><br />
          </div>
          <div className="otherQuickOptions">
            <span><a href="/categories/Cars" className="quickOption">Cars</a></span>
            <span><a href="/categories/Motorcycles" className="quickOption">Motorcycles</a></span>
            <span><a href="/categories/Mobiles" className="quickOption">Mobile Phones</a></span>
            <span><a href="/categories/For Sale:Houses & Apartments" className="quickOption">For Sale:Houses & Apartments</a></span>
            <span><a href="/categories/Scooters" className="quickOption">Scooters</a></span>
            <span><a href="/categories/Commercial & Other Vehicles" className="quickOption">Commercial & Other Vehicles</a></span>
            <span><a href="/categories/For Rent: House & Apartments" className="quickOption">For Rent: House & Apartments</a></span>
          </div>
        </div>
        </div>
    )
}

export default QuickOption
