import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer>
    <MDBRow>
        <MDBCol md="6" className='mx-auto'>
            
        <MDBCard className='bg-white align-contet' style={{width : "fit-conetnt"}}>
            <MDBCardHeader>
            <p className="">Write to us</p>
            </MDBCardHeader>
            <MDBCardBody>
                <form action='/data' method='post'>
                    
                    
                    <input type="email" id="defaultFormLoginEmailEx" placeholder='Email' className="form-control" />
                    <br />
                   
                    <textarea class='form-control'>

                    </textarea>
                    <div className="text-center mt-4">
                    <MDBBtn color="indigo" className='btn-sm' type="submit">Submit</MDBBtn>
                    </div>
                </form>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
</MDBContainer>
);
};

export default FormPage;