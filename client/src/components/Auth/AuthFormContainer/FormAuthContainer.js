import './FormAuthContainer.scss';

const FormAuthContainer = ({ title, children, message }) => (
  <section id="FormAuthContainer">
    <div className="form-auth-container">
      <h1 className="form-auth-container-title">{title}</h1>
      <hr></hr>
      <div className="form-auth-container-message">
        {message ? <h3>{message}</h3> : null}
      </div>
      <div className="form-auth-container-content py-1">{children}</div>
    </div>
  </section>
);

export default FormAuthContainer;
