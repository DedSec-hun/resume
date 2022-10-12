
import './style/Description.css';
import React, { useState } from 'react';

function Description() {
  const [widthWork, setWorkWidth] = useState("0%")
  const [widthTech, setTechWidth] = useState("0%")
const showWork = () => {
  setWorkWidth("80vw")
}

const showTech = () => {
  setTechWidth("80vw")
}

const hideStuff = () => {
  setTechWidth("0vh")
  setWorkWidth("0%")
}

  return (
    
    <div className='right'>
     <section>
          <h1>Experience</h1>
          <div class="grid-container">
            <div>
              <h2> 2020.12- </h2>
            </div>
            <div>
              <div class="vertical_line">
                <p> Robert Bosch Electronics Hungary </p>
                <p class="info">  <em> Industry 4.0 Project Engineer
                  </em> 
                </p>
              </div>
            </div>
            
            <div>
              <h2> 2019.04-2020.12 </h2>
            </div>
            <div>
              <div class="vertical_line">
                <p>Robert Bosch Electronics Hungary </p>
                <p class="info" > <em> Process Engineer trainee / Students@Bosch </em>
                </p>
              </div>
            </div>
            
            <div>
              <h2> 2018.03-2019.04 </h2>
            </div>
            <div>
              <div class="vertical_line">
                <p> Robert Bosch Electronics Hungary </p>
                <p> <em> Lean engineer trainee </em> </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1>Education</h1>
          <div class="grid-container">
            <div>
              <h2> 2019-2021 </h2>
            </div>
            <div>
              <div class="vertical_line">
                <p> Budapest University of Technology and Economics </p>
                <p> <em> Engineering and Management MSc </em> - IT management </p>
              </div>
            </div>
            <div>
              <h2> 2015-2019 </h2>
            </div>
            <div>
              <div class="vertical_line">
                <p> Budapest University of Technology and Economics </p>
                <p> <em>Engineering and Management BSc </em> - Mechanical Engineering </p>
              </div>
            </div>
            </div>
        </section>
        <section>
        <div className='btn-container'> 
        <h1 className='btn' onClick={showWork}> WORK</h1>
        <h1 className='btn' onClick={showTech}> TechStack</h1>
        </div>
        </section>
        <div style ={{width: widthWork}} class="overlay">
                <h1 onClick={hideStuff} class="overlay-btn">Close</h1>
                  <div class="overlay-content">
                    <p>
                    "In this position I started using Html, CSS, PHP, JavaScript as a profession to develop websites
                    for internal use and also started using PowerBI to create useful information
                    from databases I created/my apps handled and also using other plant level common databases. The
                    applications were:
                    <li> updating a legacy Quality scrap data collector with multiple form inputs</li> <li> I remade my (developed long
                    time ago) Machine Change Management System with Laravel to make it usable on the whole
                    plant level with proper Azure authentication and frontend, also with API to make its data usable for other developers </li> <li> I made a material tracking system (together with my team) which is using a handheld barcode scanner to identify and handle materials stored in fridges, and store their expiration date and other datas and alert the user about events, also having a thermometer (Arduino,Wifi,API) live data tracker about the fridges  </li> <li> A DB Admin page, where my collegaues could modify a big database (leading connected solutions)
                    they are authorized to use in a user friendly and safe update environment </li> <li> Teamboard app: managing projects, todos and workload of my team</li> 
                    <li> My latest work is a React frontend and NodeJS express backend with API calls. It is about showing who is available to solve technical problems on the machines, and also to connect the workers to specific production areas changeing their roles in the mysql database.</li> 
                    <li> several API consumer applications</li> The list is not
                    complete (other smaller solutions) and I also deploy and manage these websites and apps
                    on a Windows VM server. I was the sub project manager for a few Industry 4.0
                    applications, working with NFC, UWB technology and Websockets. I lead two developers (Web and C#) and a BI expert and they also create good solutions with my guidance."
                    </p>    
                  </div>
                </div>
                <div style ={{width: widthTech}}class="overlay">
                <h1 onClick={hideStuff} class="overlay-btn">Close</h1>
                  <div class="overlay-content">
                  C# programming etc etc
                  </div>
                </div>


    </div>
  );
}

export default Description;
