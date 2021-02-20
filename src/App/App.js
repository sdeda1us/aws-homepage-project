import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Blog from '../Blog/Blog.jsx';
import Coding from '../Coding/Coding.jsx';
import About from '../About/About.jsx';
import Resume from '../Resume/Resume.jsx';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Header/>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path = "/" component={About}/>
          <Route path = "/coding" component={Coding}/>
          <Route path = "/resume" component={Resume}/>
          <Route path = "/blog" component={Blog}/>
        </Switch>
      </Router>
    </>
  );
}

