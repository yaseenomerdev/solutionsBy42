import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { httpClient } from "../../utils/http";

function Login() {
  const [payload, setPayload] = React.useState({
    email: "test@42.solutions",
    password: "solutions@42",
  });

  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = await httpClient("login", { method: "POST", body: payload });
      navigate("/dashboard");
    } catch (error) {
      alert("invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex-col justify-center hidden md:flex items-center h-screen bg-secondary">
        <img src="auth/login.svg" className="w-[400px]" />

        <img src="auth/login-now.png" className="w-[200px]" />
      </div>
      <div className="flex flex-col justify-center items-center h-screen gap-7 ">
        <img src="logo.png" className="w-[242px]" />

        <img src="auth/login-welcome.png" className="w-[450px]" />

        <form className="form" onSubmit={onSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              value={payload.email}
              onChange={(e) =>
                setPayload({ ...payload, email: e.target.value })
              }
              placeholder="ادخل البريد الإلكتروني"
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="password">
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              value={payload.password}
              onChange={(e) =>
                setPayload({ ...payload, password: e.target.value })
              }
              placeholder="ادخل كلمة المرور"
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "جاري تسجيل الدخول ..." : "تسجيل الدخول"}
          </button>

          <a href="/dashboard" className="text-primary">
            نسيت كلمة المرور ؟ قم بتعيين كلمة مرور جديدة
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
