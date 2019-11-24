import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class DisplayUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
           uname:''
            };
    this.handleKey = this.handleKey.bind(this);
  }
        handleKey = (e) => {
          /*
            Because we named the inputs to match their
            corresponding values in state, it's
            super easy to update the state
          */
          this.setState({ [e.target.name]: e.target.value });
        }

  render() {
      const { uname } = this.state;
      var { fetchData, clear } = this.props;

      return (
        <div className="marginTopSpace">
            <InputGroup className="col-md-5">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Search User: </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Type Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={this.handleKey}
                />
               <InputGroup.Append>
                     <Button onClick={() =>fetchData(uname)}>Submit</Button>
                     <Button variant="outline-secondary" onClick={() =>clear()}>Clear</Button>
               </InputGroup.Append>
            </InputGroup>
        </div>
      );
  }
}

export default DisplayUser;
