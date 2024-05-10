import axios from "axios";
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
      <div className="delete">
        <p>Are You Sure?</p>
        <button onClick={deleteUser}>YES</button>
        <button onClick={No}>NO</button>
      </div>
    </>
  );
}

export default ConformItemDelete;
