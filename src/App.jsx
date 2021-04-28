import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Manual from './components/Manual';
import Contact from './components/Contact';
import Login from './components/Login';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <FooterComponent />

        <Route path="/" exact component={Home} />
        <Route path="/cross" exact component={Home} />
        <Route path="/Manual" exact component={Manual} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Login" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;
