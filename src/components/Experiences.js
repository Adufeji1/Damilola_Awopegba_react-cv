  import React, { Component } from 'react'

  export class Experience extends Component {
    render() {
      return(
      <>
            <div className='card'>
              <div className='card-content'>
                <h6><strong>EXPERIENCES</strong></h6>
                <div className='row'>
                <div className='col s12 m4 l4 x14'>
                  <p className='teal year-exp white-text'>
                    Jan <strong>2016</strong> - March <strong>2017</strong>
                  </p>
                </div>
                <div className='col s12 m8 l8 xl8'>
                  <blackquote className='no-pad'>
                    <h6 className='no-pad mt-bottom'></h6>
                    <strong>WEB DEVELOPER</strong>
                    <h6>
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </h6>
                  </blackquote>
                </div>
                
                <div className='row'>
                <div className='col s12 m4 l4 x14'>
                  <p className='teal year-exp white-text'>
                    Jan <strong>2018</strong> - March <strong>2020</strong>
                  </p>
                </div>
                <div className='col s12 m8 l8 xl8'>
                  <blackquote className='no-pad'>
                    <h6 className='no-pad mt-bottom'></h6>
                    <strong>Full Stack Developer</strong>
                    <h6>
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </h6>
                  </blackquote>
                </div>
                </div>
              </div>
            </div> 
    </>
      );
    }
  }

export default Experiences;