import React, { Component, useState } from "react";





export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:3000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "/";
        }
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner auth-inn">
        <form onSubmit={handleSubmit}>
          <h3>Нэвтрэх</h3>

          <div className="lg:w-1/2 w-full">
            <label className=" block mb-2 text-lg">Имэйл хаяг</label>
            <input
              type="email"
              className="form-control"
              placeholder="Имэйл оруулна уу"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <label className=" block mb-2 text-lg">Нууц үг</label>
            <input
              type="password"
              className="form-control"
              placeholder="Нууц үгээ оруулна уу "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Сануулах
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="py-1 px-2 border rounded bg-blue text-white">
            Нэвтрэх
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/register">Бүртгүүлэх</a>
          </p>
        </form>
      </div>
    </div>
  );
}
