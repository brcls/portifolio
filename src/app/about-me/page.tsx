import React from "react";

export default function AboutMe() {
  return (
    <div className="flex flex-col text-center gap-10 justify-center items-center py-20">
      <p className="text-5xl md:text-6xl font-bold">Lists</p>
      <div className="glass-dark w-1/2 rounded-xl p-4">
        <p className="text-3xl md:text-4xl font-bold mb-5">Lists Teste</p>
        <ol className="list-decimal list-inside">
          <li className="text-3xl mt-2">Teste</li>
          <li className="text-3xl mt-2">Teste</li>
          <li className="text-3xl mt-2">Teste</li>
          <li className="text-3xl mt-2">Teste</li>
        </ol>
      </div>
      <div className="glass-dark w-1/2 rounded-xl p-4">
        <p className="text-3xl md:text-4xl font-bold mb-5">Lists Teste</p>
        <ol className="list-decimal list-inside">
          <li className="text-3xl mt-2">Teste</li>
          <li className="text-3xl mt-2">Teste</li>
          <li className="text-3xl mt-2">Teste</li>
          <li className="text-3xl mt-2">Teste</li>
        </ol>
      </div>
    </div>
  );
}
