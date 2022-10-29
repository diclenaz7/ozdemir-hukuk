import React from "react";
import "../../App.css";
import PeopleCards from "../PeopleCards";

export default function Ekibimiz() {
  return (
    <div>
      <h1 className="ekibimiz">EKİBİMİZ</h1>
      <div>
        <PeopleCards />
      </div>
    </div>
  );
}
