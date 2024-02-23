import "./App.css";
import Card from "./components/card";

function App() {
  //const [count, setCount] = useState(0);

  let myobj = {
    itemname: "Macbook",
    text: "hello1",
  };

  return (
    <>
      <h1 className="heading p-5 bg-blue-400 rounded-md text-black mb-2">
        Code Aryan
      </h1>
      <Card itemname="laptop" newobj={myobj} btnText="Read me" />
      <Card itemname="iPhone" newobj={myobj} />
    </>
  );
}

export default App;
