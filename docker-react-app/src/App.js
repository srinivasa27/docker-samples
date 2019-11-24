import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayUser from './DisplayUser';

class App extends React.Component {

 constructor(props) {
         super(props);
         this.state = {
          user: {}
         };

         this.onSubmit = this.onSubmit.bind(this);
         this.clear = this.clear.bind(this);
       }

          onSubmit = (e) => {
          // get our form data out of state
          axios.get('https://my-json-server.typicode.com/srinivasa27/userdeatils/user')
            .then((result) => {
                this.setState({user:result.data});
            });
        }
        clear = (e) => {
            this.setState({user:""});
        }



  render(){
  const { user } = this.state;

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Users List
        </p>
      </header>
      <DisplayUser fetchData={this.onSubmit} clear={this.clear}/>
      <div className="userlist">
        <div><h1>First Name:</h1></div><div><h1> {user.fname}</h1></div>
        <div><h1>Last Name: </h1></div><div><h1>{user.lname}</h1></div>
      </div>


    </div>
  );
  }
}

export default App;
