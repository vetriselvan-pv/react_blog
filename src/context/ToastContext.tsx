import { createContext } from "react";
import type { ToastContextType } from "../modal/toast";

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);