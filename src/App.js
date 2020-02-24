import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import RandomNumber from "./showNumber";

function App() {
  const [coords, setCoords] = useState([0, 0]);
  const [listData, setData] = useState([]);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    const response = await fetch(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    console.log(response);
    const dataJson = await response.json();
    console.log(dataJson);
    setData(dataJson.data);
  };

  const doSomething = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setCoords([position.coords.latitude, position.coords.longitude]);
    });
    return;
  };

  return (
    <div className="App">
      <h1>伊藤</h1>

      <a href="/link">クリックしてね</a>
      <h2>
        {coords[0]}, {coords[1]}
      </h2>
      {listData.map(item => {
        return <div key={item.id}>{item.employee_name}</div>;
      })}
      <button onClick={doSomething}>現座地を取得！</button>
      <button onClick={fetchEmployeeData}>データ取得</button>
      <h2>ハロー</h2>
      <RandomNumber />
    </div>
  );
}

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <button onClick={() => setCount(count - 1)}>Click me2</button>
//     </div>
//   );
// }

export default App;
