import { createContext, useCallback, useEffect, useState } from "react";
import "./index.css";
import Table from "./Table";

const UsersContext = createContext();

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    setUsers(json);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log({ users });

  const [page, setPage] = useState(0);
  const pageSize = 5;

  const ctxValue = {
    users,
    page,
    pageSize,
    setPage,
  };

  return (
    <UsersContext.Provider value={ctxValue}>
      <div className="App">
        <h1>Users</h1>
        <Table />
      </div>
    </UsersContext.Provider>
  );
}

export { UsersContext };
