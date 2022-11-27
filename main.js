'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

class myblock extends React.Component {
  constructor(props) {
    super(props);   
  }

  render() {
    const className = 'item level';
    return React.createElement(
      'h1',
      { className: className },
      'Test'
    );    
  }

}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));

const domContainer1 = document.querySelector('#app1');
const root1 = ReactDOM.createRoot(domContainer1);
root1.render(React.createElement(myblock));