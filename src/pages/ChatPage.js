import React, { Component } from 'react';

// import ChatApp from './Components/ChatApp'


class ChatPage extends Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
    fetch('http://54.148.89.190/WEBAPI/GetDistrictList', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        TokenID: '4b566ba0-8300-4c36-8c23-57a2dbd1882d',
        DeviceTimeStamp: '25-08-2017 16:17:26',
        ProductType: "ilit",
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        //return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // handleClick = () => {
  //   if (this.refs.message.value === '') {
  //     // { "TokenID":"4b566ba0-8300-4c36-8c23-57a2dbd1882d", "DeviceTimeStamp":"25-08-2017 16:17:26", "ProductType":"ilit" }
  //     // fetch('http://54.148.89.190/WEBAPI/GetDistrictList', {
  //     //   method: 'POST',
  //     //   headers: {
  //     //     'Accept': 'application/json',
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     //   body: JSON.stringify({
  //     //     TokenID: '4b566ba0-8300-4c36-8c23-57a2dbd1882d',
  //     //     DeviceTimeStamp: '25-08-2017 16:17:26',
  //     //     ProductType: "ilit",
  //     //   })
  //     // }).then((response) => response.json())
  //     //   .then((responseJson) => {
  //     //     console.log(responseJson)
  //     //     return responseJson.movies;
  //     //   })
  //     //   .catch((error) => {
  //     //     console.error(error);
  //     //   });
  //   } else {
  //     alert(this.refs.message.value);
  //   }
 // }
  render() {
    return (
      <div>
        <div >
          <label>Hi! {this.props.pName}</label>
        </div>
        <br />
        <div>
          <br /><br /><br /><br />
        </div>
        <br />
        <div>
          <input type='text' ref='message' />
          <button onClick={this.handleClick.bind(this)}>Send</button>
        </div>
      </div>
    );
  }
}

export default ChatPage;
