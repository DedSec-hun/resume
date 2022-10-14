import me from "./pic/me.jpg";
import "./style/Name.css";
import App from "./App";

function Name() {
  return (
    <div className="left">
      <div class="name-style">
        <div class="name-text">
          <h1>
            <em>Antal</em> Csiszár{" "}
          </h1>
          <b>
            <p>1996. 05. 12.</p>
            <p>Hungary, 1066 Budapest</p>
            <p>
              {" "}
              <a href="mailto:csantal96@gmail.com">
                {" "}
                csantal96@gmail.com{" "}
              </a>{" "}
            </p>
            <p>
              {" "}
              <a href="tel:+36203212486"> +36203212486 </a>{" "}
            </p>
            <p>
              {" "}
              <a href="https://www.linkedin.com/in/csisz%C3%A1r-antal-b32748118">
                LinkedIn
              </a>
            </p>
          </b>
        </div>
      </div>

      <img src={me} className="pic" alt="logo" />

      <App />
    </div>
  );
}

export default Name;
