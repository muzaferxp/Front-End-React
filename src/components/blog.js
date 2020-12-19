import React from "react";
import Postpage from "../components/post"
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";


class BlogComponentsPage extends React.Component {

  constructor() {

      super();
      this.handleLoginKeyUp = this.keyUpHandler.bind(this, 'LoginInput');
  }

  keyUpHandler(refName, e) {
      console.log(refName);
      console.log(e)
      const value1 = document.getElementById(refName).value

      console.log(value1)
      // prints either LoginInput or PwdInput
  }

  
  render() {

    const data =  {
      "Adam" :  "I am a full stack developer",
      "Sam" : "I am a web developer",
      "David" : "I am UI / UX Designer"
    }
      return (
          <div>
              <input type="text" className='form-control' placeholder='Search employee' onKeyUp={this.handleLoginKeyUp} id='LoginInput' ref="LoginInput" />
              {
        Object.keys(data).map((key, index) => ( 
          <Postpage  name={key} bio={data[key]}/> 
        ))
      }
          </div>
      );
  }
}


export default BlogComponentsPage;