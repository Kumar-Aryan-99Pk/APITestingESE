import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";


function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");


  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      alert("Signup successful");

      navigate("/");

    } catch (error) {

      alert(
        error.response.data.message
      );

    }

  };


  return (

    <div className="container">

      <div className="card auth-card">

        <h2>Signup</h2>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Signup
          </button>

        </form>

        <p>
          Already have account?
          <Link to="/">
            Login
          </Link>
        </p>

      </div>

    </div>

  );

}

export default Signup;