import "../css/dashboard.css";
import axios from "axios";
const RiderTable = () => {
  return (
    <div className="center">
      {/* <h2>Delivering</h2> */}
      <table className="body">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Address</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {riderList.map((rider, index) => (
            <tr key={index}>
              <td>{rider.itemName}</td>
              <td>{rider.address}</td>
              <td>{rider.number}</td>
              <td>
                <button onClick={() => onPlusClick(index)}>Plus</button>
                <button onClick={() => onTickClick(index)}>Tick</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default RiderTable;
