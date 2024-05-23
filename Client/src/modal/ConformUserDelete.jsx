import axios from "axios";
import "../css/modal.css";

function ConformUserDelete(id) {
  const deleteUser = async () => {
    try {
      console.log(id);
      const deleteUserResponse = await axios.delete("/api/user/" + id.user);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  const No = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="move">
    <div className="form">
      <div className="delete">
        <p>Are You Sure?</p>
        <div>
        <button onClick={deleteUser}>YES</button>
        <button onClick={No}>NO</button>
      </div>
      </div>
      </div>
    </>
  );
}

export default ConformUserDelete;
