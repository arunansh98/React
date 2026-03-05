import { UsersContext } from "./App";
import { useContext } from "react";
import usePaginator from "./hooks/usePaginator";

export default function Paginator() {
  const { users, setPage, pageSize } = useContext(UsersContext);
  const pages = usePaginator(users, pageSize);
  return (
    <div
      style={{
        marginTop: "0.5rem",
      }}
    >
      {Array(pages)
        .fill((_item, index) => 1)
        .map((_page, pageIndex) => (
          <button
            key={pageIndex}
            style={{
              marginLeft: "0.2rem",
              backgroundColor: "aliceblue",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setPage(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        ))}
    </div>
  );
}
