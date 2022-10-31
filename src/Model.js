import React from "react";
import { useState } from "react";
const Model = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className={isModalOpen ? "layout" : ""}></div>
      <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <p onClick={() => setIsModalOpen(false)} className="x">
          X
        </p>
      </div>
      <button className="button-modal" onClick={() => setIsModalOpen(true)}>open modal</button>
    </div>
  );
};

export default Model;
