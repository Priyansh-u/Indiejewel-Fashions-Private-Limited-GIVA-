import react from "react";
function TableRow(props) {
  let row = props.row1;
  console.log(row);
  return (
    <tr>
      {/* {" "} */}
      {row.map((val) => {
        <td>{val}</td>;
      })}
    </tr>
  );
}
export default TableRow;
