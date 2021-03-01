import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Blog from '../Blog/Blog.jsx';
import Coding from '../Coding/Coding.jsx';
import About from '../About/About.jsx';
import Resume from '../Resume/Resume.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Container, Paper, makeStyles} from '@material-ui/core';
import './App.css'



export default function App() {
  return (
    <Container>
      <Paper elevation={3} style={{marginTop: '40px'}}>
      <Header/>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path = "/" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path = "/coding" component={Coding}/>
          <Route path = "/resume" component={Resume}/>
          <Route path = "/blog" component={Blog}/>
        </Switch>
      </Router>
      </Paper>
    </Container>
  );
}

