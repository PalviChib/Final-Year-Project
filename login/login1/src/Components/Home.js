import React from 'react'
import temp from '../assets/degree.jpg'
import op from '../assets/analysis.jpg'
import eme from '../assets/student-lapi.jpg'
import ten from '../assets/evaluation.png'
import sixx from '../assets/evaluation1.png'

function Home() {
  return (
    <div>
         <div>
           <nav className="navbar background ">
               <ul className="leftnav">
                   <li id="one1">Super Fast Services Available</li>
               </ul>
               {/* <div className="rightnav ">

                   <input type="text" name="search" id="search" />
                   <button className="btn" id ="find">Search</button>

               </div> */}
           </nav>
           <div className="whole">
               <section className="background firstsection">
                 <img src={temp} id="firstimage" alt="temp" width="750px" /> 

                   <div className="boxmain" id="boxmain">
                       <div className="secondhalf" id="secondhalf">
                          Hundreds of Students Registered
                       </div>
                   </div>
               </section>
               <section className="secondsection">
                   <div className="secondsectiondiv" id="secondsection">
                       <div id="secondimage">
                           <img src={op} className="secondimage" id="secondimage" alt="flower" /> 
                       </div>
                       <div id="soul">
                           "The soul can never be cut to pieces by any weapon, <br />nor burned by fire, nor moistened by water,
                           <br />nor withered by the wind"
                       </div>
                   </div>
               </section>
               <section className="thirdsection">
                   <div className="thirdsectiondiv" id="thirdsection">
                       <div id="zero">Agenda</div><br/>
                       <div id="zero1">All Categories</div>
                       <div id="one" className="one"></div>
                       <div id="two"></div>
                       <div id="three"></div>
                       <div id="four"></div>
                   </div>
               </section>
               <section className="fourthsection">
                   <div className="fourthsectiondiv" id="fourthsection">
                     {/* <h2 className ="mission">Mission</h2><br/> */}
                    <h1 className="para"> Your Marks Will Always Be updated </h1>
                   </div>
               </section>
               <section className="sixthsection">
                   <div className="sixthsectiondiv" id="sixthsection">
                   <img src={ten} id="tenth" alt="safety" width="750px" /> 
                    Fast Searching and Fetching Processes
                   </div>
               </section>
               <section className="seventhsection">
                   <div className="seventhsectiondiv" id="seventhsection">
                       <div className="purchase">
                       <img src={sixx} className="sixthimage" id="sixthimage" alt="flower" />
                           Available 24*7
                       </div>
                   </div>
               </section>
               <section className="eightsection">
                   <div className="eightsectiondiv" id="eight">
                        Contact Us Anytime
                   </div>
               </section>
               <section className="ninthsection">
                   <div className="ninthsectiondiv" id="map">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56985.22172980554!2d82.16414831349444!3d26.78977089411502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sayodhya%20ram%20mandir%20maps!5e0!3m2!1sen!2sin!4v1634392847195!5m2!1sen!2sin" width="1510" height="500" allowfullscreen="" loading="lazy"></iframe>
                   </div>
                   <div>
                   </div>
               </section>
               <section className="tenthsection">
                   <div className="tenthsectiondiv" id="map">
                   <img src={eme} id="tenth" alt="safety" width="750px" /> 
                   </div>
               </section>
           </div>
           <footer id="last" className="last">&copy; Copyright 2022 Registration And Marks Filling and Fetching System </footer>
       </div>
    </div>
  )
}
export default Home