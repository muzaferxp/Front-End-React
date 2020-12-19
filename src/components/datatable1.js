import React, { Component } from 'react';
import axios from "axios";
import { MDBContainer,MDBDataTableV5 ,  MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
class dtable extends Component {

        state = {
        data : [],
        name : "",
        tabledata : {}
      };
    
    

    handleSubmit = event => {
        event.preventDefault();
      
       
    
        axios.post('/datatable1', {
            username : this.state.name
        })
       
          .then(res=>{
            console.log(res);
            console.log(res.data);
            this.setState({ tabledata: res.data.data})
           
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
            

                 <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4}  pagingTop searchTop searchBottom={false} data={this.state.tabledata} materialSearch />;
               
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
</MDBContainer>
);
      };
};

export default dtable;