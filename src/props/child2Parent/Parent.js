import { h, Component } from 'preact';
import Child from './Child';

class Parent extends Component {
  handleChildClick = (data) => {
    console.log(data);
  }

  render() {
    return <Child onButtonClick={this.handleChildClick} />;
  }
}

export default Parent;
