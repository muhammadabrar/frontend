
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <h1>warka dang</h1>
      <div className="App">
        {/* <Navbar /> */}
        <div className="content">
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/categories/:category">
              <Categories />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;