import React from "react";

function Card({ title, description, image, resize, datos_formula, link }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p style={{ fontSize: "18px", textAlign: "justify" }}>
        {description} {link && link}
      </p>
      <h3>Fórmula</h3>
      <div className="formula">
        <img
          src={image}
          alt={`Fórmula de ${title}`}
          style={{ maxHeight: resize, maxWidth: resize }}
        />
        <ul>
          {datos_formula.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
