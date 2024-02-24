import { useState } from "react";

function App() {
  const [color, setColor] = useState("skyblue");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="flex justify-center items-center h-screen font-bold text-4xl text-white shadow-xl"
        //style={"font-size: 18px"}
      >
        bgChanger
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center bg-white px-3 py-2 gap-3 shadow-lg rounded-xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-xl shadow-md  text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-xl shadow-md  text-white"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-xl shadow-md  text-white"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-xl shadow-md  text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-xl shadow-md  text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="outline-none px-4 py-1 rounded-xl shadow-4xl  text-black"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("Orange")}
            className="outline-none px-4 py-1 rounded-xl shadow-md  text-white"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("Lavender")}
            className="outline-none px-4 py-1 rounded-xl shadow-4xl  text-black"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
