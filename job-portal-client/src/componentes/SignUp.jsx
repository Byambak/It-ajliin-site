import React, { Component, useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Бүртгүүлэх</h3>
          <div>
           
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            Хэрэглэгч
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            админ
          </div>
          {userType == "Admin" ? (
            <div className="lg:w-1/2 w-full">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="lg:w-1/2 w-full">
            <label className=" block mb-2 text-lg">Нэр</label>
            <input
              type="text"
              className="form-control"
              placeholder="Нэр"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <label className=" block mb-2 text-lg">Овог</label>
            <input
              type="text"
              className="form-control"
              placeholder="Овог"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <label className=" block mb-2 text-lg">Имэйл хаяг</label>
            <input
              type="email"
              className="form-control"
              placeholder="Имэйл хаягаа оруулна уу"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <label className=" block mb-2 text-lg">Нууц үг</label>
            <input
              type="password"
              className="form-control"
              placeholder="Нууц үг оруулна уу"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid ">
            <button type="submit" className="py-1 px-2 border rounded bg-blue text-white">
            Бүртгүүлэх
            </button>
          </div>
          <p className="forgot-password text-right">
          Аль хэдийн бүртгүүлсэн бол <a href="/login">нэвтэрнэ үү?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
