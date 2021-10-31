

import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container,Row,Col, Image } from 'react-bootstrap'
import banner from './imgs/banner.png';
import NewBlog from './components/NewBlog';
function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
          <Container fluid style={{padding:"0"}}>
            <Image src={banner} fluid style={{width:"100%"}}/>
          </Container>
          <Container className="mt-5 mb-5">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/create" component={NewBlog}/>
            </Switch>
            </Container>
            <Container fluid className="bg-dark text-white text-center pt-3 pb-3">
              <Row>
                <Col>
                  <p className="fs-5">© Online Car Rental Company</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="fs-6">Done by <a href="https://github.com/Hassan-AlAmer" className="link-info" target="_blank">Hassan AlAmer</a></p>
                </Col>
              </Row>
            </Container>
        </div>
      </Router>
  );
}

export default App;
