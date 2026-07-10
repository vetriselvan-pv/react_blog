import { useCallback, useState } from "react";
import { UseCallbackChild } from "./UseCallBackChild";
import { UseCallbackChild1 } from "./UseCallBackChild1";

export const UseCallbackParent: React.FC = () => {
  const [count, setCount] = useState(0);

  console.log("parent comp loaded");

  const callbackfn = useCallback(() => {
    console.log("callback fn triggered");
  }, []);

  const nonCallbackfn = () => {
    console.log("non callback fn triggered");
  };

  return (
    <>
      <UseCallbackChild callbackfn={callbackfn} />

      <UseCallbackChild1 noncallbackfn={nonCallbackfn}  />

      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
};
