import React from 'react';

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
        <b>Display User:</b>
        <input
                      type="text"
                      name="uname"
                      value={uname}
                      onChange={this.handleKey}
                    />
        <button type="button" onClick={() =>fetchData(uname)}>Submit</button>
        <button type="button" onClick={() =>clear()}>Clear</button>

        </div>
      );
  }
}

export default DisplayUser;