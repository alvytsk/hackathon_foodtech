import React, { Component } from 'react'
import Webcam from "react-webcam";
import ImageLoader from 'react-loading-image'

export default class VideoContainer extends Component {
    state = {
        imageHash: 0,
        imageName: 'http://localhost:3000/images/frame.png',
        value: ''
    };

    componentDidMount() {
        setInterval(() => {
            const img_hash = Date.now()
            this.setState({
                imageHash: img_hash
            });
        }, 1000);
    }

    onChange = (e) => {
        this.setState({
          value: e.target.value
        });
      }
    
      render() {
        const {imageName, imageHash} = this.state;

        const imgPath = imageName + '?' + imageHash;

        const style = {
            width: 640,
            height: 480
        }

        return (
          <div>
            
            <div>
              { 
                <ImageLoader
                  src={imgPath}
                  style={style}
                  loading={() => <div>Loading...</div>}
                  error={() => <div>Error</div>}
                  />
              }
            </div>
          </div>
        );
      }
}
