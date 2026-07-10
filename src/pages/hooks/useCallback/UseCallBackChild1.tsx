import type React from "react";

interface IUseCallbackChildProps {
  noncallbackfn: () => void;
}


export const UseCallbackChild1 : React.FC<IUseCallbackChildProps> = ({noncallbackfn}) => {

    console.log("Child Comp without useCallback ");
     return (
      <>
        <p>Hello Child Component: ( Non Callback Fn )</p> 
        <button type="button" onClick={() => noncallbackfn()}>
          {" "}
          Trigger NonCallback Fn{" "}
        </button>
      </>
    );

}
