import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="flex justify-center text-white bg-slate-800 p-4 text-3xl">
      User: {userid}
    </div>
  );
}

export default User;
