"use client";

import React, { useState } from "react";

export default function Alert() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {showAlert && (
        <div
          className="p-4 z-50 glass-dark bg-[#6365f184] border-none fixed bottom-4 right-1/2 
      w-11/12 translate-x-1/2 flex justify-between text-start items-center rounded-xl gap-4"
        >
          <p>
            This portfolio is not yet finalized, but one day it will be hehe
          </p>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setShowAlert(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
