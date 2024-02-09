// import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: 'white'
    // })
    let myStyle = { color: props.mode === 'dark' ? 'white' : 'rgb(12 108 137)', backgroundColor: props.mode === 'dark' ? 'rgb(12 108 137)' : 'white', border: '1px solid', borderColor: 'dark' ? 'white' : 'rgb(12 108 137)' }




    return (
        <div className='container' style={myStyle}>
          <h2 className='my-3'>About us</h2>
          <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  WELCOME TO TEXTARTIST!
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>At TextArtist,</strong> You can count the characters and words which preview on the screen and also remove extra spaces and make the text bold.
                </div>
              </div>
            </div> {/* Close the first accordion item */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  NEW SPEAK MODE!
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>A good pronunciation of words.</strong> TextArtist is not just about visualizing text; it's also about giving your words a voice. With our innovative Speak Mode, you can take your content to the next level by transforming text into engaging audio experiences.
                </div>
              </div>
            </div> {/* Close the second accordion item */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  CONTACT US:
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>Founder Engr. Taimoor Habib</strong> Phone no: 03042872301 or email me at: taimoorhabib948@gmail.com
                </div>
              </div>
            </div> {/* Close the third accordion item */}
          </div>
        </div>
      );
    }      