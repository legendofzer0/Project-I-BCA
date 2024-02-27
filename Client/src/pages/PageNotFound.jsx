import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function PageNotFound() {
  const Navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      Navigate("/");
    }, 2000);
  }, []);
  return (
    <>
      <div className="center">
        <h1>PAGE NOT FOUND</h1>
      </div>
    </>
  );
}

export default PageNotFound;
