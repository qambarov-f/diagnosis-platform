import React, { useState } from "react";
import Style from "./Forget.module.css";
import { Link } from "react-router-dom";

const Forget = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("E-mail adresi: ", email);
  };

  return (
    <div>
      <h2 className={Style.title}>Şifənizi unutmusunuz?</h2>
      <h4 className={Style.word}>
        Şifrənizin sıfırlanması üçün qeydiyyatdan <br /> keçdiyiniz email
        ünvanını qeyd edin
      </h4>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={Style.input}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </label>
        <br />
        <button className={Style.button} type="submit">
          Sıfırla
        </button>
      </form>
      <h5 className={Style.link}>
        <Link to="/daxil-olmaq" className={Style.login}>Daxil olun</Link>
        və ya
        <Link to="/qeydiyyat" className={Style.register}>Qeydiyyatdan keçin</Link>
      </h5>
    </div>
  );
};

export default Forget;
