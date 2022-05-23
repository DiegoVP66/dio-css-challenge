import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { ContactType } from "types/contact";
import { makeBackendRequest } from "util/request";
import "./styles.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>();

  const onSubmit = (formData: ContactType) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: "POST",
      url: `/contact`,
      data: data,
    };

    makeBackendRequest(config)
      .then(() => {
        //Testando
        window.location.reload();
      })
      .catch((error) => {
        console.log("Erro: " + error);
      });
  };

  return (
    <div className="form-container" id="contact">
      <div className="contact">
        <h1 className="email-title">Envie uma mensagem</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              {...register("name", {
                required: "Campo obrigatório",
              })}
              className={`form-control base-input ${
                errors.name ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="Nome"
              name="name"
            />
            <div className="invalid-feedback d-block">
              {errors.name?.message}
            </div>
          </div>
          <div className="">
            <input
              {...register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              className={`form-control base-input ${
                errors.email ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="E-mail"
              name="email"
            />
            <div className="invalid-feedback d-block">
              {errors.email?.message}
            </div>
          </div>

          <div className="message-box">
            <textarea
              {...register("message", {
                required: "Campo obrigatório",
              })}
              className={`form-control base-input ${
                errors.email ? "is-invalid" : ""
              }`}
              name="message"
              placeholder="Mensagem"
            />
            <div className="invalid-feedback d-block">
              {errors.message?.message}
            </div>
          </div>
          <div className="btn-adjust">
            <div className="btn-container">
              <button className="btn-register">ENVIAR</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
