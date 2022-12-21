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
            I am doing Industry 4.0 project coordination and Full Stack Software Development in an industrial environment but also managing a small IT team. I am doing programming (C# console apps, services, wpf
            apps) since my process engineering internship (2019) and before that I collected Lean experiences for almost one year from 2018. I got into web development since I am a
            full time Industry 4.0 project engineer (2020). The projects I did are done with Laravel PHP framework utilizing all its possibilities, I also worked with high level Javascript (ecmascript) creating web app with NodeJS backend and React frontend. I work daily with different databases, mainly MySQL.
            C# is my go to language for console apps and services with compute-intensive tasks. Beside work I graduated on Engineering/Management field BSc and then during MSc I focused on IT management.
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
              data-tip="I know nodejs as abackend, I used it mainly for APIs and event-driven apps."
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
              data-tip="This CV is using CSS with responsive design I just lack a bit of creativity."
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              className="App-logo"
              alt="CSS"
            />
            <img
              data-tip="I know how to create APIs with JS and PHP as well, it drives everything. And also know how to consume them."
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--RK-AgEnh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1s3bedypkt7zm8maikzg.png"
              className="App-logo"
              alt="APIs"
            />
            <img
              data-tip="I have a good Javascript knowledge (~0.5 yrs) using it as vanilla js, react js, node js and beginner level typescript..."
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
              className="App-logo"
              alt="Javascript"
            />
          </div>
          <div>
            <img
              data-tip="This CV is made with React using the main hook types! (~0.5 yrs) "
              src={logo}
              className="App-logo"
              alt="react"
            />
            <img
              data-tip="This is my go to Framework in case of bigger projects, with all its benefits. MVC architecture, OOP, Middlewares, APIs, Controllers, Models, Testing... (~2 yrs)"
              src="https://png.pngitem.com/pimgs/s/578-5785080_laravel-6-logo-png-transparent-png.png"
              className="App-logo"
              alt="Laravel"
            />
            <img
              data-tip="A solid PHP knowledge is needed for Laravel. (~2 yrs)"
              src="https://www.freepnglogos.com/uploads/logo-php-png/php-server-integration-wysiwyg-html-editor-froala-10.png"
              className="App-logo"
              alt="PHP"
            />
            <img
              data-tip="I have a strong C# knowledge, ConsoleApps, WPF apps, Winform apps, Service apps, but not ASP.NET because there are better tools :) (~3+ yrs)"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
              className="App-logo"
              alt="C#"
            />
          </div>
          <div>
            <img
              data-tip="I work with it every day and it is the best db in my opinion (~2.5 yrs)"
              src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
              className="App-logo"
              alt="MYSQL"
            />
            <img
              data-tip="I can write and udnerstand high level SQL queries. (~2.5 yrs)"
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
              className="App-logo"
              alt="SQL"
            />
            <img
              data-tip="I work with it every day it is second to MySQL (~2 yrs)"
              src="https://m.media-amazon.com/images/I/41QodfboFdL.png"
              className="App-logo"
              alt="Oracle DB"
            />
          </div>
          <div>
            <img
              data-tip="I used it as a hobby. Making small games for mobile and playing around with physics. It is a good coding excercise and also looking forward to utilise it more in the future."
              src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png"
              className="App-logo"
              alt="Unity"
            />
            <img
              data-tip="I use it to create dashboards from multiple data sources and to approach complicated data modeling needs. (~2 yrs)"
              src="https://www.pei.com/wp-content/uploads/2016/08/maxresdefaultreduced.jpg"
              className="App-logo"
              alt="PowerBI"
            />

            <img
              data-tip="I have to deploy my apps and databases on my own and care about this vm server doing updates and installing required updates/sofwares."
              src="https://banner2.cleanpng.com/20180920/fol/kisspng-windows-server-2-12-logo-organization-brand-windows-server-5ba39cd715d540.3534964615374491750894.jpg"
              className="App-logo"
              alt="Windows Server / IIS"
            />
            <img
              data-tip="Every project I did is tracked on GitHub/Bitbucket."
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png"
              className="App-logo"
              alt="GIT"
            />
              <img
              data-tip="I use it as a hobby to learn more about embedded systems, elecronics, IOT and C++ programming."
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/720px-Arduino_Logo.svg.png"
              className="App-logo"
              alt="Arduino"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
