import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home/HomePage";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      {/* <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} /> */}
    </Router>
  );
}

export default App;
