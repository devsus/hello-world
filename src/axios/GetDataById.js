import axios from "axios";
import React from "react";
const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";
//https://www.freecodecamp.org/news/how-to-use-axios-with-react/
function GetDataById() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseUrl).then((respone) => {
      setData(respone.data);
    });
  }, []);
  if (!data) return null;
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default GetDataById;
