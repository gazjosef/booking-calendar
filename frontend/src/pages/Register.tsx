import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import {
  register,
  // reset
} from "../features/auth/authSlice";
import { UserData } from "../features/auth/authService";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    // user,
    // isLoading,
    // isError,
    // isSuccess,
    // message,
  } = useSelector((state: RootState) => state.auth);

  useEffect(
    () => {
      // if (isError) {
      //   toast.error(message);
      // }
      // if (isSuccess || user) {
      //   navigate("/");
      // }
    },
    [
      // user,
      // isError,
      //  isSuccess,
      //  message,
      //   navigate,
      //   dispatch
    ]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData: UserData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className="heading">
        <div className="container">
          <div className="flex item-center justify-center gap-1">
            <span className="grid place-items-center">
              <FaUser />
            </span>
            <h1>Register</h1>
          </div>
          <p>Please create an account</p>
        </div>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={onChange}
            />
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={onChange}
            />
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
            <input
              type="text"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Register;
