import { h, Component } from 'preact';
import Child from './Child';

class Parent extends Component {
  render() {
    return <Child name="Biswajit" />;
  }
}

export default Parent;
