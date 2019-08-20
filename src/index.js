import React from "react";
import ReactDOM from "react-dom";
import MainHeader from "./components/MainHeader";
import RoverPage from "./components/Rovers/RoverPage";
import PODPage from "./components/PicOfDay/PODPage";
import SimpleReactLightbox from "simple-react-lightbox";
import { lightboxOptions } from "./tools/configs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import "./custom.css";

function App() {
  return (
    <div
      className="App stars"
      onKeyDown={e => {
        console.log(e.keyCode);
      }}
    >
      <MainHeader />
      <Route path="/" exact component={RoverPage} />
      <Route path="/pod" exact component={PODPage} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <SimpleReactLightbox {...lightboxOptions}>
    <Router>
      <App />
    </Router>
  </SimpleReactLightbox>,
  rootElement
);
