const Table = ({ tableData }) => {
  return (
    <div className="w-32 sm:w-[800px] h-[240px] rounded-md bg-white">
      <table className="shadow-lg">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.data &&
            tableData.data.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
