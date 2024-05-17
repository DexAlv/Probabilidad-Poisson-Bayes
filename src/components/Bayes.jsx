import { useState } from "react";
import Card from "./Card";

function Bayes() {
  const [pba, setPBA] = useState(0);
  const [pa, setPA] = useState(0);
  const [pb, setPB] = useState(0);
  const [resultado, setResultado] = useState(null);

  function calcularBayes(pba, pa, pb) {
    const res = (pba * pa) / pb;
    setResultado(res * 100);
  }

  return (
    <div className="tarjeta">
      <Card
        title="Teorema de Bayes"
        description="El teorema de Bayes nos es útil cuando queremos saber la probabilidad de que ocurra un suceso cuando ya ocurrió otro que afecta la probabilidad del primer suceso."
        link={
          <a href="https://aprendeconeli.com/la-diferencia-entre-el-teorema-de-la-probabilidad-total-y-el-teorema-de-bayes/#:~:text=El%20teorema%20de%20Bayes%20es,de%20que%20sea%20una%20niña%3F">
            (Cabana, 2022)
          </a>
        }
        image="./bayes.jpg"
        datos_formula={[
          "P(B|A): Probabilidad de que suceda un evento B dado que ya sucedió un evento A",
          "P(A): Probabilidad de que suceda el evento A",
          "P(B): Probabilidad de que suceda el evento B",
        ]}
        resize="30%"
        key={2}
      />
      <h3 style={{ marginTop: "15px", textAlign: "center" }}>Calculadora</h3>
      <div className="calculadora">
        <div className="calc-form">
          <div className="input-container">
            <label htmlFor="pba">P(B|A):</label>
            <input
              type="number"
              step="0.01"
              id="pba"
              name="pba"
              onChange={(e) => setPBA(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="pa">P(A):</label>
            <input
              type="number"
              step="0.01"
              id="pa"
              name="pa"
              onChange={(e) => setPA(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="pb">P(B):</label>
            <input
              type="number"
              step="0.01"
              id="pb"
              name="pb"
              onChange={(e) => setPB(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              calcularBayes(pba, pa, pb);
            }}
          >
            Calcular Bayes
          </button>
        </div>
        <h3>{!resultado ? "" : resultado + " %"} </h3>
      </div>
    </div>
  );
}

export default Bayes;
