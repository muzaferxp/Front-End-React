import React, { Component } from 'react';
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
class searchuser extends Component {
  
        state = {
        data : [],
        name : ""
      };
    


    handleSubmit = event => {
        event.preventDefault();
      
       
    
        axios.post('/test', {
            username : this.state.name
        })
       
          .then(res=>{
            console.log(res);
            console.log(res.data);
            this.setState({ data: res.data.data})
           
        })
      }
    handleChange = event =>{
        this.setState({ name: event.target.value});
      }

      
      render() {
return (
<MDBContainer>
    <MDBRow>
        <MDBCol md="12" className='mx-auto'>
            
        <MDBCard className='bg-white' style={{width : "700px"}}>
            <MDBCardHeader>
            <p className="">Write to us</p>
            </MDBCardHeader>
            <MDBCardBody>
                <form  onSubmit = { this.handleSubmit }>
                    
                    
                    <input type="text" id="defaultFormLoginEmailEx" onChange = { this.handleChange } placeholder='user' className="form-control" />
                    <br />
                   
                 
                    <div className="text-center mt-4">
                    <MDBBtn color="indigo" className='btn-sm' type="submit">Submit</MDBBtn>
                    </div>
                </form>

                <p>response</p><hr />
                <table class='table table-active table-responsive table-hover table-striped bg-white  card'>
                    <tbody>
                    {
                            this.state.data.map((numList,i) =>(
                            <tr key={i}>
                                {
                                numList.map((num,j)=>
                                    <td key={j}>{num}</td>
                                )
                                }
                            </tr>
                            ))
                    }
                    </tbody>
                </table>
       

        
               
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
</MDBContainer>
);
      };
};

export default searchuser;