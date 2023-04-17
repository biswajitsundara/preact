import { h, Component } from "preact";

class Child extends Component {
  render() {
    return <div>My name is {this.props.name}</div>;
  }
}
export default Child;
