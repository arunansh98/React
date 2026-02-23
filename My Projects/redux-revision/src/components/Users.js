import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../slices/usersSlice";

export default function Users() {
  const { data, loading, error } = useSelector((state) => state.users);
  console.log({ data });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading === true) {
    return <h1>Fetching users...</h1>;
  }

  if(error){
    return <h1 style={{
        color:'red'
    }}>Error while fetching users !</h1>
  }

  return (
    <div>
        <h1>Users:</h1>
      {data.map((user) => (
        <h2 key={user.id}>
          {user.firstName} {user.lastName}
        </h2>
      ))}
    </div>
  );
}
