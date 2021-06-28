import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
import About from "./about";
import Error from "./error";
import React, { Component } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { overrideThemeVariables } from "ui-neumorphism";

class App extends Component {
  componentDidMount() {
    // takes an object of css variable key-value pairs
    overrideThemeVariables({
      "--light-bg": "#E4EBF5",
      "--light-bg-dark-shadow": "#bec8e4",
      "--light-bg-light-shadow": "#ffffff",
      "--dark-bg": "#444444",
      "--dark-bg-dark-shadow": "#363636",
      "--dark-bg-light-shadow": "#525252",
      "--primary": "#2979ff",
      "--primary-dark": "#2962ff",
      "--primary-light": "#82b1ff",
    });
  }
  render() {
    return (
      <div data-testid='app' className='wrapper'>
        <Header/>
        <section className='portfolio-block projects-cards'>
          <div className='container'>
            <Router>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  component={Home}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/home`}
                  component={Home}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/detail/:book_id`}
                  exact
                  component={Detail}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/about`}
                  component={About}
                />
                <Route path='*' component={Error} />
              </Switch>
            </Router>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
