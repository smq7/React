import React, { useState } from "react";
function Header() {
    // Над написати скрипт шоб хеадер прилипав 
    
    return (
            <ul className="header" >
                <li>Home</li>
                <li>About</li>
                <li>Families</li>
                <li>Work here</li>
                <li>Shop</li>
                <li className="center"><img src ={`${process.env.PUBLIC_URL}/img/Camp_Atwater_logo_cmyk_r.png`}/></li>
                <li><button>Request info</button> </li>
            </ul>   
    
    )
}
function Main (){
    return (
    <div >
        <div className="blockOne">
            <div className="backVideo">
                <video loop muted autoPlay >
                    <source src= {`${process.env.PUBLIC_URL}/img/video.mp4`} type="video/mp4"> 
                    </source>
                </video>
            </div>
            <div className ="content">
                <h1> An Experience of a Lifetime </h1>
                <button> Enroll Now</button>
            </div>
        </div>
        <div className="blockTwo">
            <div className="img1">   
                <img src={`${process.env.PUBLIC_URL}/img/History-Pic-600x618.jpg`}></img>
                <div className="textToImg1">
                    <h1>CONTINUING LEGACY</h1>
                    <p>Serving youth for over 100 years, Camp Atwater is a residential summer camp for boys and girls, 8 - 15 years old. Atwater is located in North Brookfield, MA. Our mission is to develop youth physically, intellectually, emotionally and socially. Camp Atwater is owned and operated by the Urban League of Springfield, accredited by the American Camping Association, and listed on the National Register of Historic Places. We welcome you to explore the prestigious and oldest African American owned and operated summer residential youth camp in the nation.  
                    </p>
                    <button>Learn more</button>
                </div>
            </div>
            <div className="img2">
                <div className="textToImg2">
                    <h1>Learn More About Summer 2024</h1>
                    <button>Dates & Rates</button>
                </div>
                <img src={`${process.env.PUBLIC_URL}/img/AM7J1203.jpg`}></img>
            </div>
        </div>
        <div className ="blockTree">
            <div className="photos">
                <img src={`${process.env.PUBLIC_URL}/img/photo1.jpg`}></img>
                <img src={`${process.env.PUBLIC_URL}/img/photo2.jpg`}></img>
                <img src={`${process.env.PUBLIC_URL}/img/photo3.jpg`}></img>
             </div>
             <div className="something">
                <p> Get excited about all the things to do!</p>
                <button>Explore More Programs</button>
             </div>
        </div>
        <div className= "blockFour">
            <p>Celebrating over <br/>
            100 Years of Service</p>
            <button>Enroll Today!</button>            
        </div>
    </div>
    )
}

function Footer(){
    return (
        <div className="footer"> 
            <div>
                <div>
                    <h1>CAMP ATWATER</h1>
                    <p>20 Shore Road North </p>
                    <p>Brookfield, MA 01535 </p>
                    <p>413-739-7211</p>
                </div>
                <div>
                    LOGO
                </div>
                <div>
                    <ul>
                        <li>Programs</li>
                        <li>Contact</li>
                        <li>Employment Opportunities</li>
                    </ul>
                </div>
            </div>
            <div>
                силки на всяку тему
            </div>
        </div>
    )
}



export default function App(){
    function handleScroll(){
        console.log("vadim");
    }
    return ( 
    <>    
        <Header/>
        <Main/>
        <Footer/>
    </>
    )
}