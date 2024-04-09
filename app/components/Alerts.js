import React, { useEffect, useState } from "react";

export default function Alerts({ type, message }) {
  return (
    <>
        <div
          className={`container mx-auto mt-2 alert alert-${type} text-center bg-green-200 p-1`}
        >
          <span className="text-green-600 font-extrabold text-lg">
            {message}
          </span>
        </div>
    </>
  );
}

