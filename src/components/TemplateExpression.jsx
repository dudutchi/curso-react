// 4 - template expression

const TemplateExpression = () => {
const name = "Eduardo";

const data = {
    age: 20,
    job: "Programador"
}
  return (
    <div>
      <p>A soma é {2 + 2}.</p>
      <h3>Bem vindo {name}.</h3>
      <p>Sua idade é {data.age} anos.</p>
      <p>Sua profissão é {data.job}.</p>
    </div>
  );
};

export default TemplateExpression
