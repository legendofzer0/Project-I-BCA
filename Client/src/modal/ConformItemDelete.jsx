import axios from "axios";
import "../css/modal.css";
function ConformItemDelete(id) {
  const deleteUser = async () => {
    console.log(id);
    try {
      const deleteItemResponse = await axios.delete("/api/item/" + id.id);
      // console.log(response);
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
      </div>
    </>
  );
}

export default ConformItemDelete;
