import React from "react";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h1 className="sectionHeader">{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
