import React, { useState } from "react";
import TableRow from "./tablecomp";

//  for storing the up the data they give
let heading = ["Id", "Title", "Description"];
function Next() {
//   for rendering the new data to the array atready exist
  const [data, setData] = useState([]);
  const [descri, setDescri] = useState({
    title: "",
    description: ""
  });
  const [id, setId] = useState(0);
  function handleChanges(event) {
    const { name, value } = event.target;
    setDescri((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
    // console.log(descri);
  }
  function handleSubmit() {
    // event.preventDefault();
    let value = id;
    value++;
    setId(value);
   let dataconsist = {
      id: value,
      title: descri.title,
      description: descri.description
    };
    setData((prevValues) => {
      return [...prevValues, dataconsist];
    });
    console.log(data);
  }

  return (
    <div>
      <p className="register">Things U Like </p>
      <input
        onChange={handleChanges}
        name="title"
        placeholder="Title"
        value={descri.title}
      />
      <textarea
        onChange={handleChanges}
        name="description"
        placeholder="Description"
        value={descri.description}
      />
      <button onClick={handleSubmit} className="button">
        Submit
      </button>
      <table style={{ width: 1500 }}>
        <thead>
          <tr>
            {/* for mapping the heading */}
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* for mapping out the rows in the array */}
          {data.map((row) => {
            <TableRow row1={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Next;
