import React from "react";

export default function Users() {
  const items = [
    { id: 1, name: "Deeksha", age: 20 },
    { id: 2, name: "Mohini", age: 60 },
    { id: 3, name: "Kinjal", age: 49 },
    { id: 4, name: "Mohan", age: 10 },
    { id: 5, name: "Rohan", age: 79 },
    { name: "John", id: 6, age: 20 },
    { name: "Jane", id: 7, age: 60 },
    { name: "Billy", id: 8, age: 40 }
  ];

  const itemList = items.map((item) => (
    <li key={item.id}>
      {" "}
      {item.name}--{item.age}{" "}
    </li>
  ));

  return <h1>{itemList}</h1>;
}
