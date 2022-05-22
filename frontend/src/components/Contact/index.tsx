import "./styles.css";

const Contact = () => {
  return (
    <div className="form-container">
      <div className="contact">
        <h1 className="email-title">Contact me</h1>
        <form className="form">
          <div className="">
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="">
            <input type="text" placeholder="E-mail" name="email" />
          </div>

          <div className="message-box">
            <textarea name="message" placeholder="Message" />
          </div>
          <div className="btn-adjust">
            <div className="btn-container">
              <button className="btn-register">SEND</button>
            </div>
            <div className="btn-container">
              <button className="btn-cancel">CANCEL</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
