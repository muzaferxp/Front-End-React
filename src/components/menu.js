import React from "react";
import FormPage from "../components/login"
import { BrowserRouter as Router, Switch ,  Route} from "react-router-dom"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody,MDBListGroup, MDBListGroupItem, MDBCardHeader } from 'mdbreact';

const MainPage = () => {
    return (
    <MDBContainer>
      <div>
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
    </div>
        
       
     
    </MDBContainer>

);
};

export default MainPage;