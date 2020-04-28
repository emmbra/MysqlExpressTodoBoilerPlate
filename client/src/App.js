import React from "react";
import "./app.css";

const purpleMode = true;

const RenderListItems = props => {
  return props.items.map((item, index) => {
    return <li key = {index}>{item}</li>
  });
}

const Greetings = props => (
  <div>
    <h1>Hello World</h1>
    <p>Hi my name is { purpleMode ? props.name : 'Emm-Dawg'}</p>
    <p>{props.lastName}</p>
    <ul>
      <p>My favorite things to do in quarantine:</p>
      <RenderListItems items = {['Playing video games', 'sleeping', 'baking']}/>
    </ul>
    <ul>
      <p>My favorite movies:</p>
      <RenderListItems items = {['Braveheart', 'The Matrix', 'Fight Club']}/>
    </ul>
  </div>
);

// functional component || dumb component
const App = props => (
  <div className="colorBlue" style={{ fontSize: "40px", backgroundColor: purpleMode ? 'purple' : 'green' }}>
    <Greetings name={props.name} lastName={props.lastName}/>
    {console.log(props)}
  </div>
);

export default App;
