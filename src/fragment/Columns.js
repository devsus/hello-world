import React from "react";

function Columns() {
  const items = [];
  return (
    <React.Fragment>
      {/* we can iterate like that  */}
      {items.map((item) => (
        <React.Fragment key={item.key}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Devendra</td>
    </React.Fragment>
  );
}

export default Columns;
