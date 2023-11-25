import React, { useState, useEffect } from "react";

interface Item {
  name: string;
  age: number;
  city: string;
}

function App() {
  const [data, setData] = useState<Item[]>([]);

  const getData = () => {
    fetch("http://127.0.0.1:8000/blog/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson: Item[]) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <p key={item.name}>{`${item.name}, ${item.age}, ${item.city}`}</p>
        ))}
    </div>
  );
}

export default App;
