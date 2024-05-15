import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <>
      <div className="center">
        <h1>PAGE NOT FOUND</h1>
        <Link to='/'>Go to Home</Link>
      </div>
    </>
  );
}

export default PageNotFound;
