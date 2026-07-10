import { startTransition, useActionState } from "react";

export const UseActionStateHooksComp: React.FC = () => {

    console.log('re-render');

  const reducerAction = async (previousState: boolean, payload: any) => {
    console.log(`Previous State : ${previousState}, Payload : ${payload}`);
    await new Promise((resolve) => {
      setTimeout(() => {
        // hanlde the logic here
        resolve(true);
      }, 2000);
    });
    return true;
  };

  const [state, dispatchAction, isPending] = useActionState(
    reducerAction,
    false,
  );

  const triggerAction = (e:any) => {
    startTransition(() => dispatchAction(""));
  };

  return (
    <>
    <button onClick={triggerAction} type="button">
      Trigger Action
    </button>
    <pre> State { String(state) } </pre>
    <pre> Pending { String(isPending) } </pre>

    </>

  );
};
