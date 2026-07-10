import { startTransition, useActionState, useState } from "react";
import "./LoginForm.css";

export const LoginForm: React.FC = () => {
  const [formValue, setFormValue] = useState({
    userName: "",
    password: "",
  });

  const reducerAction = async (previousState: boolean, payload: any) => {
    console.log(payload);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // hanlde the api/logic here
        resolve(true);
      }, 2000);
    });
    return true;
  };

  const [state, dispatchAction, isPending] = useActionState(
    reducerAction,
    false,
  );

  const onChangeEvent = (value: string, field: "userName" | "password") => {
    const val: { userName?: string; password?: string } = {};
    val[field] = value;
    setFormValue({ ...formValue, ...val });
  };

  return (
    <div className="login-wrapper">
      <form>
        <div className="form-container">
          <div className="form-feilds">
            <input
              type="text"
              name="userName"
              id="userName"
              value={formValue["userName"]}
              onChange={(event) =>
                onChangeEvent(event.target.value, "userName")
              }
            />
          </div>
          <div className="form-feilds">
            <input
              type="password"
              name="password"
              id="password"
              value={formValue["password"]}
              onChange={(event) =>
                onChangeEvent(event.target.value, "password")
              }
            />
          </div>
          <div className="form-feilds">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                startTransition(() => dispatchAction(formValue));
              }}
              type="submit"
            >
              Login
            </button>
          </div>
          {
            <>
              <pre>Form State: {String(state)} </pre>
              <pre>Form Pending: {String(isPending)} </pre>
            </>
          }
        </div>
      </form>
    </div>
  );
};

