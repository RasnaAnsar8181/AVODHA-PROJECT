import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

function Details() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [no, setNo] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:8080/posts");
        setItems(res.data);
        setNo(items.length);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="maincontainer">
        <div className="content">
          <h3><u>POST DETAILS</u></h3>
          <table className="table table-striped table-light mt-3">
            <thead>
              <tr className="table-primary">
                <th scope="col">IDNO</th>
                <th scope="col">TITLE</th>
                <th scope="col">CONTENT</th>
                <th scope="col">ACTION</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td className="iconfield">
                    <Button
                      onClick={() =>
                        navigate("/update", { state: { value: item } })
                      }
                    >
                      EDIT
                    </Button>
                  </td>
                  <td className="iconfield">
                    <Button
                      onClick={() =>
                        navigate("/delete", { state: { value: item } })
                      }
                    >
                      DELETE
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Details;
