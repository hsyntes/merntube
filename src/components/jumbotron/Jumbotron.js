const Jumbotron = ({ title, text }) => (
  <section className="text-center my-32">
    <h1 className="font-semibold text-3xl mb-2">{title}</h1>
    <p>{text}</p>
  </section>
);

export default Jumbotron;
