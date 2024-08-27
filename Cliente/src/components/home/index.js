import SecondaryLogo from "../../assets/images/ColombinaLogo2.svg"

const Home = () => {
  return (
    <div className="main_container">
      <main>
        <img src={SecondaryLogo} alt="second-logo" />
        <p>
          En nuestra empresa, nos dedicamos a mejorar la comunicación y
          colaboración con empleados y clientes, ofreciendo una solución
          integral que asegura una interacción eficiente y actualizaciones en
          tiempo real.
        </p>
      </main>
    </div>
  );
};

export default Home;
