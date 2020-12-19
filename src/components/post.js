import React from "react";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";

function Postpage(props){

    
  return (
    <>
    
      <MDBContainer className='my-4'>
        <MDBCardHeader className="border-0 font-weight-bold d-flex  bg-info text-white justify-content-between">
          <p className="mr-4 mb-0">{props.name}</p>
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="envelope"  />Send message</li>
            <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />See profile</li>
            <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="rss" />Follow</li>
          </ul>
        </MDBCardHeader>
        <MDBMedia className="p-4 bg-white">
          <MDBMedia >
            <img className="card-img-100 d-flex z-depth-1 mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="" />
          </MDBMedia>
          <MDBMedia body>
            <h5 className="font-weight-bold mt-0">
            {props.name}
            </h5>
            {props.bio}
          </MDBMedia>
        </MDBMedia>
      </MDBContainer>

      
   
      </>
  );
}

export default Postpage;