import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Dpost() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteData() {
      try {
        const res = await axios.delete(
          `http://localhost:8080/posts/${location.state.value.id}`
        );
        if (res.status === 201) {
          alert("The document is successfully deleted");
        } else {
          alert("No such file exist");
        }
      } catch (error) {
        console.log(error);
      }
    }
    deleteData();
    navigate("/details");
  }, []);

  return <></>;
}

export default Dpost;
