import "./App.css";
import Block from "./components/Block";
import Card from "./components/Card";
import Notice from "./components/Notice";
import { useEffect, useState } from "react";

export default function App() {
  let [data, setData] = useState([]);
  let [oneItem, setOneItem] = useState(null);
  useEffect(() => {
    async function getData(params) {
      let response = await fetch(
        `https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get`
      );
      const data = await response.json();
      setData(data.response.data);
    }

    getData();
  }, []);

  async function getOneItem(id) {
    let response = await fetch(
      `https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get&unload_id=${id}`
    );
    const data = await response.json();
    let dataObject = data.response.data[0];
    setOneItem(dataObject);
  }

  function clear(params) {
    setOneItem(null);
  }

  return (
    <div className="App">
      <Block />
      <Notice oneItem={oneItem} clear={clear} />
      <Card data={data} getOneItem={getOneItem} />
    </div>
  );
}
