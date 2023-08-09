import { Users } from "./Users";
import React, { useState } from "react";
import "./styles.css";
import Table from "./Table";

export default function App() {
  const [query, setQuery] = useState("");

  const search = (Users) => {
    return Users.filter((user) => {
      return (
        user.first_name.toLowerCase().includes(query) ||
        user.last_name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search here"
        id="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <ul className="list">
        {filter.map((user) => (
          <li className="listItem">{user.first_name}</li>
        ))}
      </ul> */}

      <Table data={search(Users)} />
    </div>
  );
}
