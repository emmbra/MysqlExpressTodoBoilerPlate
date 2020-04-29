import React from 'react';
import Counter from '../../containers/counter';
import TodoForm from '../../containers/TodoForm';

// no state so now a functional component
const App = () => {
  return (
    <div>
      <Counter/>
      <TodoForm/>
    </div>
  )
}

export default App;
