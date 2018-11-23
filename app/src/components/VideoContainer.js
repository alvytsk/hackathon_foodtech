import React, { Component } from 'react'
import Webcam from "react-webcam";
import ImageLoader from 'react-loading-image'

export default class VideoContainer extends Component {
    state = {
        imageHash: 0,
        imageName: 'http://localhost:3000/test.jpg',
        value: '',
        data: {}
    };

    componentDidMount() {
        setTimeout(() => {

            fetch('http://localhost:3000/test.json')
			.then(response => response.json())
			.then(data => {
                console.log(data);
				this.setState({data: data })
		    })
			.catch(err => console.error(this.props.url, err.toString()))

            this.setState({
                imageHash: Date.now()
            });
        }, 1000);
    }

    onChange = (e) => {
        this.setState({
          value: e.target.value
        });
      }
    
      render() {
        const {imageName, imageHash, data} = this.state;

        const imagePath = imageName + '?' + imageHash;
        return (
          <div>
            <p>{imagePath}</p>
            <div>
              {imageName && (
                <ImageLoader
                  src={imagePath}
                  loading={() => <div>Loading...</div>}
                  error={() => <div>Error</div>}
                  />
              )}
            </div>
          </div>
        );
      }
}
