import { useCallback, useEffect, useRef, useState } from "react"; 
import type { ToastProps, ToastProviderProps, ToastType } from "../modal/toast";
import { Toast } from "../components/toast/Toast";
import { ToastContext } from "../context/ToastContext";

export const ToastProviders: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<ToastProps[]>([]);
  const timerRef = useRef<Map<string, number>>(new Map());

  const removeToast = useCallback((id: string) => {
    setToast((pre) => pre.filter((item) => item.id !== id));
    const timer = timerRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timerRef.current.delete(id);
    }
  }, []);

  const addToast = useCallback(
    (
      message: string,
      type: ToastType,
      { id, duration  }: { id: string; duration: number } = { id : "", duration : 2000 },
    ) => {
      const uniqueId =
        id ||
        window.crypto?.randomUUID?.() ||
        Math.random().toString(16).substring(2, 9);

      setToast((pre) => [...pre, { id: uniqueId, message, type, duration }]);

      const timeId = setTimeout(() => {
        removeToast(uniqueId);
      }, duration);

      timerRef.current.set(uniqueId, timeId);
    },
    [removeToast],
  );


  useEffect(() => {
    const currentTimers = timerRef.current;
    return () => {
        currentTimers.forEach((timer) => clearTimeout(timer));
        currentTimers.clear();
    }
  },[])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast toasts={toast} onClose={removeToast}></Toast>
    </ToastContext.Provider>
  );
};
