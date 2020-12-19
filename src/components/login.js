import React, { Component } from 'react';
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
class FormPage extends Component {
  
        state = {
        data : [0],
      };
    


    handleSubmit = event => {
        event.preventDefault();
      
        const data = {
          key : this.state.data
        }
    
        axios.post('/test', { data })
          .then(res=>{
            console.log(res);
            console.log(res.data);
            this.setState({ data: res.data.data})
           
        })
      }
    handleChange = event =>{
      
        this.setState({ data: event.target.value});
      }
      render() {
return (
<MDBContainer>
    <MDBRow>
        <MDBCol md="6" className='mx-auto'>
            
        <MDBCard className='bg-white align-contet' style={{width : "fit-conetnt"}}>
            <MDBCardHeader>
            <p className="">Write to us</p>
            </MDBCardHeader>
            <MDBCardBody>
                <form  onSubmit = { this.handleSubmit }>
                    
                    
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
};

export default FormPage;