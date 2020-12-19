import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody,MDBListGroup, MDBListGroupItem, MDBCardHeader } from 'mdbreact';
import { BrowserRouter as Router, Switch , Link,   Route} from "react-router-dom"
import React, { Component } from 'react';
import FormPage from "./components/login"
import MainPage from "./components/main"
import DatatablePage from "./components/table"
import ChartsPage from  "./components/radar"
import ModalPage from  "./components/modal"
class App extends Component {

  render() {
   
    return (
      <MDBContainer>
         <Router>
          <MDBRow>
            <MDBCol md={4} sm={12} className='mt-4 border rounded mx-auto'>
              <div class='text-center'>
                    <MDBBtn className="rounded btn-sm" onClick={() => alert("This feature in under development")}>
                            Login
                    </MDBBtn>
              </div>
            <MDBContainer>
          <MDBListGroup >
           
            <MDBListGroupItem>
              <Link to="/Home">
                Home1
              </Link>
            </MDBListGroupItem>
            <MDBListGroupItem> 
              <Link to="/login">
                Contact us
              </Link>
            </MDBListGroupItem>
            <MDBListGroupItem>
                  <Link to="/data">
                    Data
                  </Link>
            </MDBListGroupItem>
            <MDBListGroupItem>
              <Link to="/chart">
                  chart
              </Link>
            </MDBListGroupItem>
            <MDBListGroupItem>
                <Link to="/modal">
                    modal
                </Link>
              </MDBListGroupItem>
         
          </MDBListGroup>
        </MDBContainer>
        </MDBCol>
        <MDBCol md={8} sm={10} style={{height:'90vh', overflow:'auto'}} className='mt-4 bg-light rounded p-4 mx-auto '>
      

            
                <Switch>
                  <Route path='/login' component={FormPage} ></Route>
                  <Route path='/Home' component={MainPage}></Route>
                  <Route path='/data' component={DatatablePage}></Route>
                  <Route path='/chart' component={ChartsPage}></Route>
                  <Route path='/modal' component={ModalPage}></Route>
                  
                  
                </Switch>

        
              
        </MDBCol>
      </MDBRow>
      </Router>
    </MDBContainer>

    );
  }
}

export default App;