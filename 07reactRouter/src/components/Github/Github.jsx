import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/aryan1shrivastava")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className=" text-center bg-slate-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img
        className=" mx-auto my-auto p-4"
        src={data.avatar_url}
        alt="Github Pic"
        width="300px"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/aryan1shrivastava"
  );
  return response.json();
};
