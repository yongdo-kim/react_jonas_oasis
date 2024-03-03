import { useEffect, useRef } from "react";

export function useOutsideClick(handler: Function, listenCapturing = true) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      //모달 이외 외부 클릭
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, true);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler]);

  return ref;
}
