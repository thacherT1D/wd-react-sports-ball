import React from 'react';

const App = React.createClass({
  getInitialState() {
    return { city: '' };
  },

  handleChange(event) {
    const nextState = { city: event.target.value };

    this.setState(nextState);
  },

  render() {
    const city = this.state.city.trim().toLowerCase();

    let message;

    if (city === 'seattle') {
      message = <ul className="no-bullets">
        <li className="no-bullets" style={{ margin: '10px' }}>
          <a href="http://www.soundersfc.com/">Go Sounders!</a>
        </li>
        <li style={{ margin: '10px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/27/Seattle_Sounders_FC.svg"
            width="150"
          />
        </li>
      </ul>;
    }
    else if (city === 'portland') {
      message = <ul className="no-bullets">
        <li style={{ margin: '10px' }}>
          <a href="http://www.soundersfc.com/">Go Sounders!</a>
        </li>
        <li style={{ margin: '10px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/27/Seattle_Sounders_FC.svg"
            width="150"
          />
        </li>
      </ul>;
    }
    else if (city === '') {
      message = <p>Go Ahead, type in a city.</p>;
    }
    else {
      message = <p>{this.state.city}? Never heard of it.</p>;
    }

    return <div>
      <h1>
        {"Favorite City?"}
      </h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.city}
      />
      <div>{message}</div>
    </div>;
  }

});

export default App;
