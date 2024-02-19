import Role from "../private/role";
function Detail({ CurrentUser }) {
  console.log(CurrentUser);
  return CurrentUser === Role.Public ? (
    <>SignIn/SignUp</>
  ) : (
    <>
      <div>WELCOME</div>
      <div>Role: {CurrentUser}</div>
      <div>
        <form action=""></form>
      </div>
    </>
  );
}
export default Detail;
