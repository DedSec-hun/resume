import logo from "./pic/logo.svg";
import "./style/App.css";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
function App() {
  const [heightWork, setWorkHeight] = useState("0%");
  const [heightTech, setTechHeight] = useState("0%");
  const showWork = () => {
    setWorkHeight("100vh");
  };

  const showTech = () => {
    setTechHeight("100vh");
  };

  const hideStuff = () => {
    setTechHeight("0vh");
    setWorkHeight("0vh");
  };

  return (
    <footer className="App-footer">
      <ReactTooltip />
      <div className="btn-container">
        <h1 className="btn" onClick={showWork}>
          Description
        </h1>
        <h1 className="btn" onClick={showTech}>
          TechStack
        </h1>
      </div>
      <div style={{ height: heightWork }} class="overlay">
        <h1 onClick={hideStuff} class="overlay-btn">
          Close
        </h1>
        <div class="overlay-content">
          <p>
            I am doing Full Stack Software Development in an Industry(4.0)
            environment and also managing a small developer team and our
            projects. I am doing programming (C# console apps, services, wpf
            apps) since my internship (2019), and web development since I have a
            full time job (2020). A few examples of projects I have worked on at my
            workplace:
            <br></br> <br></br>
            <li>
              I designed and developed a Machine Change Management Tracking
              System from scratch with Laravel which is now used in the whole
              plant as a plant-standard app. It's tracking changes made on the
              machines around the factory and alerting stakeholders via email.
              Using Azure authentication, having a self made admin page and
              connected to mysql db. Having data models, migrations, seeders, tests.
            </li>
            <li>
              Changing a legacy .NET Quality relevant data collector
              app to Laravel PHP framework and redesign its database. Having LDAP
              authentication.
            </li>
            <li>
              Made a material tracking system WPF app (together with my team)
              which is using a handheld barcode scanner to identify and handle
              materials stored in fridges, and store their expiration date and
              other handling datas based on material type, alert the user about
              events. Also showing thermometer datas (Arduino,Wifi,Websocket)
              about the fridges.
            </li>
            <li>
              A DB Admin page, where my collegaues could modify a huge central
              database (it is driving IOT solutions) in a user friendly and safe
              update environment with logs and backups so nothing can go wrong.
            </li>
            <li>
              Teamboard app: managing projects, info share, todos, deadlines and workload of
              team. Small react app with nodejs backend.
            </li>
            <li>
              My latest work is made with a React frontend and NodeJS express
              backend with API calls. It is about showing who is inside the
              plant, available and qualified to solve technical (mechanical,
              electrical, software) problems on the machines. If somebody called
              to a technical problem an SMS is sent to him, reaction time,
              problem solving time all calculated.
            </li>
            <li>
              SMS sender service written in C# using a GSM modul hardware. It
              can be used by many applications remotely. It is managed on a
              Windows server with the help of the Non-Sucking Service Manager.
              It was developed in together wit a team member.
            </li>
            <li>
              Data feeder fully OOP APP which is collecting datas from multiple
              sources (mysql, Hadoop, Oracle, Webscraping, files on file
              shares). After collection it recalculates them then forwards it to
              a plantwide used APP's database through API calls. This app runs
              on Windows server called with a task scheduler every day.
            </li>
          </p>
        </div>
      </div>
      <div style={{ height: heightTech }} class="overlay">
        <h1 onClick={hideStuff} class="overlay-btn">
          Close
        </h1>
        <div class="overlay-content">
          <p>Hover on Icons to learn more!</p>
          <div>
            <img
              data-tip="I know nodejs I used it mainly for APIs and event-driven apps."
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/320px-Node.js_logo.svg.png"
              className="App-logo"
              alt="NodeJS"
            />
            <img
              data-tip="This CV contains a lot of html."
              src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
              className="App-logo"
              alt="HTML"
            />
            <img
              data-tip="This CV is using CSS with responsive design I just lack creativity."
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              className="App-logo"
              alt="CSS"
            />
            <img
              data-tip="I know how to create APIs with JS and PHP as well, it drives everything. And also know use how to consume them."
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--RK-AgEnh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1s3bedypkt7zm8maikzg.png"
              className="App-logo"
              alt="APIs"
            />
            <img
              data-tip="I have a strong Javascript knowledge using it as vanilla js, react js, node js and beginner level typescript..."
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
              className="App-logo"
              alt="Javascript"
            />
          </div>
          <div>
            <img
              data-tip="This CV is made with React!"
              src={logo}
              className="App-logo"
              alt="react"
            />
            <img
              data-tip="This is my go to Framework in case of bigger projects, with all its benefits. MVC architecture, OOP, Middlewares, APIs, Controllers, Models, Testing..."
              src="https://png.pngitem.com/pimgs/s/578-5785080_laravel-6-logo-png-transparent-png.png"
              className="App-logo"
              alt="Laravel"
            />
            <img
              data-tip="A solid PHP knowledge is needed for Laravel."
              src="https://www.freepnglogos.com/uploads/logo-php-png/php-server-integration-wysiwyg-html-editor-froala-10.png"
              className="App-logo"
              alt="PHP"
            />
            <img
              data-tip="I have a strong C# knowledge, ConsoleApps, WPF apps, Winform apps, Service apps, but not ASP.NET because there are better tools :)"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
              className="App-logo"
              alt="C#"
            />
          </div>
          <div>
            <img
              data-tip="I work with it every day and it is the best db in my opinion"
              src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
              className="App-logo"
              alt="MYSQL"
            />
            <img
              data-tip="I can write high level SQL queries."
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
              className="App-logo"
              alt="SQL"
            />
            <img
              data-tip="I work with it every day"
              src="https://m.media-amazon.com/images/I/41QodfboFdL.png"
              className="App-logo"
              alt="Oracle DB"
            />
          </div>
          <div>
            <img
              data-tip="I used it as a hobby. Making small games for mobile and playing around with physics. It is a good coding excercise."
              src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png"
              className="App-logo"
              alt="Unity"
            />
            <img
              data-tip="I use it to create dashboards from multiple data sources and to approach complicated data modeling needs."
              src="https://www.pei.com/wp-content/uploads/2016/08/maxresdefaultreduced.jpg"
              className="App-logo"
              alt="PowerBI"
            />

            <img
              data-tip="I have to deploy my apps and databases on my own and care about this vm server."
              src="https://banner2.cleanpng.com/20180920/fol/kisspng-windows-server-2-12-logo-organization-brand-windows-server-5ba39cd715d540.3534964615374491750894.jpg"
              className="App-logo"
              alt="Windows Server / IIS"
            />
            <img
              data-tip="Every project I did is tracked on GitHub enterprise."
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png"
              className="App-logo"
              alt="GIT"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
