export type ToastType = "success" | "failure" | "info";

export interface ToastProps {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

export interface ToastContextType {
  addToast: (
    message: string,
    type: ToastType,
    { id, duration }: { id: string; duration: number },
  ) => void;
  removeToast: (id: string) => void;
}


export interface ToastContainerProps {
    toasts : ToastProps[]
    onClose : (id:string) => void
}

export  interface ToastProviderProps {
  children: React.ReactNode;
}