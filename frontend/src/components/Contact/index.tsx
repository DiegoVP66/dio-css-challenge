import "./styles.css";

const Contact = () => {
  return (
    <div className="form-container" id="contact">
      <div className="contact">
        <h1 className="email-title">Envie uma mensagem</h1>
        <form className="form">
          <div className="">
            <input type="text" placeholder="Nome" name="name" />
          </div>
          <div className="">
            <input type="text" placeholder="E-mail" name="email" />
          </div>

          <div className="message-box">
            <textarea name="message" placeholder="Mensagem" />
          </div>
          <div className="btn-adjust">
            <div className="btn-container">
              <button className="btn-register">ENVIAR</button>
            </div>
            <div className="btn-container">
              <button className="btn-cancel">CANCELAR</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
