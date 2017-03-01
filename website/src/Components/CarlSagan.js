import React, { Component } from 'react';
import './CarlSagan.css';

class CarlSagan extends Component {

  render() {
    return (
      <div id="carlSagan">
        <div id="window">

            <div id="sunbeam">

              <div id="earth-box">
                <div id="earth"></div>
                <dl className="infos fade">
                  <dt>Earth</dt>
                  <dd></dd>
                </dl>
              </div>
              <div id="earth-beam"></div>

            </div>

            <div id="light-box">
              <div className="lightbeam lightbeam-1 lightbeam-blur-4"></div>
              <div className="lightbeam lightbeam-2 lightbeam-blur-10"></div>
              <div className="lightbeam lightbeam-3 lightbeam-blur-10"></div>
              <div className="lightbeam lightbeam-4 lightbeam-blur-4"></div>
            </div>

            <img id="saturn" src="./saturn.png" alt="Saturn" />
          </div>

          <div id="tribute-description">
            <p> A tribute to Carl Sagan (1934-1996)</p>

            <audio autoPlay>
              <source src="./quote.mp3" type="audio/mp3" />
              <p>Your browser doesn't support HTML5 audio. Here is a <a href="./quote.mp3">link</a> instead.</p>
            </audio>

          </div>
        </div>
    )
  }

}

export default CarlSagan;
