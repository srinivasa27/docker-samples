import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayUser from './DisplayUser';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
    <div className="container-fluid">
      <header className="App-header">
        <p>
          <i>Search User Details</i>
        </p>
      </header>
      <DisplayUser fetchData={this.onSubmit} clear={this.clear}/>
        <div className="marginTopSpace">
            <Card>
              <Card.Header>User Details</Card.Header>
              <Card.Body>
                <Card style={{ width: '28rem' }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item><b>First Name:</b> {user.fname}</ListGroup.Item>
                    <ListGroup.Item><b>Last Name:</b> {user.lname}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Card.Body>
            </Card>
        </div>
    </div>
  );
  }
}

export default App;
