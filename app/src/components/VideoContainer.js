import React, { Component } from 'react'
import io from "socket.io-client";

export default class VideoContainer extends Component {
    state = {
      response: false,
      endpoint: "http://localhost:3000"
    };

    componentDidMount() {
      const { endpoint } = this.state;
      const socket = io.connect(endpoint);
      socket.on("image", data => {
        this.setState({ response: data })
      });
    }
  
    render() {
      const { response } = this.state;
      console.log(response);
      return (

        <div>
          <div>
            <img src={'data:image/jpeg;base64,' + response.buffer} alt=""/>
          </div>
        </div>
      );
    }
}
