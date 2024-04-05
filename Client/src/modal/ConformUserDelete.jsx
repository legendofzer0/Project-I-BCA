import axios from "axios";
function ConformUserDelete(id) {
  const deleteUser = async () => {
    try {
      // console.log(id);
      const deleteUserResponse = await axios.delete("/api/user/" + id);
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
      <div>
        <p>Are You Sure?</p>
        <button onClick={deleteUser}>YES</button>
        <button onClick={No}>NO</button>
      </div>
    </>
  );
}

export default ConformUserDelete;
