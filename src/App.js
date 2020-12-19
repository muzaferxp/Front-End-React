import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody,MDBListGroup, MDBListGroupItem, MDBIcon, MDBCardHeader } from 'mdbreact';
import { BrowserRouter as Router, Switch , Link,   Route} from "react-router-dom"
import React, {  useState, useEffect, Component } from 'react';
import FormPage from "./components/login"
import MainPage from "./components/main"
import DatatablePage from "./components/table"
import ChartsPage from  "./components/radar"
import ModalPage from  "./components/modal"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Speech from 'react-speech';
import Form1 from "./components/append1"

function   App() {
  const $ = window.$;


    const [data, setdata] = useState("");

      useEffect(() => {
        fetch('/data').then(res => res.json()).then(data => {
          setdata(data.data);
        });
      }, []);


      
      
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

   
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
                  <Route path='/Home'>
                  <div className="card p-2 d-flex f rounded my-2">
                  <MDBRow>
                    <MDBCol md={1} sm={3} className=''>
                          <MDBIcon className=" text-primary" onClick={SpeechRecognition.startListening}  icon="microphone-alt" />
                    </MDBCol>
                    <MDBCol md={1} sm={3} className=''>
                    <MDBIcon className=" text-primary" onClick={SpeechRecognition.stopListening} icon="stop" />
                    </MDBCol>
                    <MDBCol md={1} sm={3} className=''>
                    <MDBIcon className=" text-primary"  onClick={resetTranscript} icon="undo" />
                    </MDBCol>
                    <MDBCol md={1} sm={3} className=''>
                      <MDBIcon  className=" text-primary"  md={3} sm={3}  icon="save" />
                    </MDBCol>
                    <MDBCol md={2} sm={3} className=''> <Speech text={transcript}/ >Listen</MDBCol>
                   
                    

                   
                  </MDBRow>

                     
                     

                  </div>

                 

                  <textarea class="my-2 form-control" value={transcript}></textarea>
            
                  
              <ul classNaame='mylist'>

              </ul>
                  {data.split(",").map((item,index)=>{
            return <div className='card'><p>{item}</p><Speech text={item}/ ></div>
        })}




                  </Route>
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


export default App;