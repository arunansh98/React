import Paginator from "./Paginator";
import { useContext } from "react";
import { UsersContext } from "./App";
import usePage from "./hooks/usePage";

export default function Table() {
  const { users, page, pageSize, setPage } = useContext(UsersContext);

  const pageItems = usePage(page, pageSize, users);

  const renderedUsers = pageItems.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.title}</td>
      <td>{user.body}</td>
    </tr>
  ));
  return (
    <>
      <table border={1} cellPadding={3}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>{renderedUsers}</tbody>
      </table>
      <Paginator />
    </>
  );
}
