import React from "react";
import FormPage from "../components/login"
import { BrowserRouter as Router, Switch ,  Route} from "react-router-dom"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody,MDBListGroup, MDBListGroupItem, MDBCardHeader } from 'mdbreact';

const MainPage = () => {
    return (
<MDBContainer>
      <MDBRow>
        <MDBCol md={4} sm={12} className='mt-4 border rounded mx-auto'>
          <div class='text-center'>
                <MDBBtn className="rounded btn-sm" onClick={() => alert("This feature in under development")}>
                        Check Health
                </MDBBtn>
          </div>
        <MDBContainer>
      <MDBListGroup >
        <MDBListGroupItem>Page 1</MDBListGroupItem>
        <MDBListGroupItem>Page 2</MDBListGroupItem>
        <MDBListGroupItem>Page 3</MDBListGroupItem>
        <MDBListGroupItem>Page 4</MDBListGroupItem>
        <MDBListGroupItem>Page 5</MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
        </MDBCol>
        <MDBCol md={8} sm={10} style={{height:'90vh', overflow:'auto'}} className='mt-4 bg-light rounded p-4 mx-auto '>
              <Router>
                  <Route path='/login' component={FormPage} />
              </Router>
        </MDBCol>
      </MDBRow>
     
    </MDBContainer>

);
};

export default MainPage;