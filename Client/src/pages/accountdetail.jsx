import Role from "../private/role";
function Detail({ CurrentUser }) {
  console.log(CurrentUser);
  return CurrentUser === Role.Public ? (
    <>SignIn/SignUp</>
  ) : (
    <>
      <div className="body">
        <div>WELCOME</div>
        <div>Role: {CurrentUser}</div>
        <div>
          <form></form>
        </div>
      </div>
    </>
  );
}
export default Detail;
