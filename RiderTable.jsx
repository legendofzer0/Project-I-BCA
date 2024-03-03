
const RiderTable = ({ riderList, onPlusClick, onTickClick }) => {
    return (
      <div className="rider-table">
        <h2>Delivering</h2>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Address</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riderList.map((rider, index) => (
              <tr key={index}>
                <td>{rider.itemName}</td>
                <td>{rider.address}</td>
                <td>{rider.number}</td>
                <td>
                  <button onClick={() => onPlusClick(index)}>Plus</button>
                  <button onClick={() => onTickClick(index)}>Tick</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RiderTable;