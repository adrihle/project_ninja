"use client";

import { Field, PasswordField } from "@/components";

const Login = () => {
  return (
    <div
      className="  min-h-screen flex justify-center items-center"
      style={{ backgroundColor: "#1a237e" }}
    >
      <h3 className="text-3xl h-10 text-white">Login</h3>
      <div className="  border-2 mx-auto w-80 h-80 flex flex-col items-center justify-around">
        <div className="text-white">Bienvenido Ceo</div>
        <form action="" className="w-80  flex justify-center flex-col">
          <Field />
          <PasswordField />

          <input type="text" value="Acceder" />
        </form>
      </div>
    </div>
  );
};

export default Login;
