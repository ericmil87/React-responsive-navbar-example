import "./App.css"; // just main page css styling

// import React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import NavBar component
import NavBar from "./components/NavBar";

// Import your pages components
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        {/* render NavBar component */}
        <NavBar />

        <div className="pages">
          <Switch>
            {/* edit here your Routes and set their path(url) and component */}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
