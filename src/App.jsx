import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './routes';

const getRoutes = () => {
  return routes.map((props) => (
    <Route
      key={props.id}
      path={props.path}
      render={(p) => <props.component {...p} />}
      exact={props.exact}
      strict={props.strict}
    />
  ));
};

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <React.Suspense fallback={<span />}>
          <Switch>{getRoutes()}</Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
