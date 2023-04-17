import { h, Component } from 'preact';

class Child extends Component {
  handleClick = () => {
    this.props.onButtonClick('Button clicked!');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

export default Child;
