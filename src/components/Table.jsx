import { tableData } from "./Data";

const Table = () => {
  return (
    <div className="w-32 sm:w-[800px]">
      <table className="shadow-lg">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {tableData.map((data) => (
          <>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default Table;
