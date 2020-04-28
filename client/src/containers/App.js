import React from 'react';
import Counter from './counter';
import TodoForm from './TodoForm';

// functional/regular/dumb component
// const App = props => (
//   <div>
//     <h1>Hello World</h1>
//   </div>
// );

// no state so now a functional component
const App = () => {
  return (
    <div>
      <Counter/>
      <TodoForm/>
    </div>
  )
}

// container component
// class App extends Component {
//   render() {
//     // console.log("I'm inside render");
//     return (
//       <div>
//         <Counter/>
//         <TodoForm/>
//       </div>
//     );
//   }
// }

export default App;
