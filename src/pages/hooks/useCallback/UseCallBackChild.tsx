import { memo } from "react";

interface IUseCallbackChildProps {
  callbackfn: () => void; 
}

export const UseCallbackChild: React.FC<IUseCallbackChildProps> = memo(
  ({ callbackfn  }) => {
    console.log("Child comp with useCallback loaded");

    return (
      <>
        <p>Hello Child Component </p>
        <button type="button" onClick={() => callbackfn()}>
          {" "}
          Trigger Callback Fn{" "}
        </button> 
      </>
    );
  },
);
