"use client";

import React, { useState } from "react";

export default function Alert() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {showAlert && (
        <div
          role="alert"
          className="alert z-50 glass-dark bg-[#6365f184] border-none fixed bottom-4 right-1/2 
      w-11/12 translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            This portfolio is not yet finalized, but one day it will be hehe
          </span>
          <div>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => setShowAlert(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
