import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Header />

              <Switch>
                  <Route exact path='/' component={() => <div>Home</div>} />
                  <Route path='/services' component={() => <div>Services</div>} />
                  <Route path='/customsoftware' component={() => <div>Custom Software</div>} />
                  <Route path='/mobileapps' component={() => <div>Mobile Apps</div>} />
                  <Route path='/websites' component={() => <div>Websites</div>} />
                  <Route path='/revolution' component={() => <div>The Revolution</div>} />
                  <Route path='/about' component={() => <div>About Us</div>} />
                  <Route path='/contact' component={() => <div>Contact Us</div>} />
                  <Route path='/estimate' component={() => <div>Estimate</div>} />
              </Switch>
          </Router>
      </ThemeProvider>
  );
}

export default App;
