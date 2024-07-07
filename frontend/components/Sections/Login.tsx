import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";
import InputField from "../Snippets/InputField";
import Button from "../Snippets/Button";

export default function Login() {
  return (
    <section className="min-h-[85vh] | grid place-items-center">
      <form className="max-w-md w-1/3 mx-auto border-2 p-4 rounded-lg space-y-6">
        <div className="space-x-2 mx-auto | flex items-center justify-center | text-2xl uppercase">
          <IconContext.Provider value={{ size: "2rem" }}>
            <FaUser />
          </IconContext.Provider>
          <h2>Login</h2>
        </div>

        <InputField
          label={"Enter Email"}
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"jane@gmail.com"}
          autoComplete={""}
        />

        <InputField
          label={"Enter Password"}
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"booking123"}
          autoComplete={"current-password"}
        />

        <Button title={"Sign In"} />
      </form>
    </section>
  );
}
