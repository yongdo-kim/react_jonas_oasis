import {
  ButtonHTMLAttributes,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ModalContextType = {
  openName: string;
  close: () => void;
  open: (windowName: string) => void;
};

const ModalContext = createContext<ModalContextType>({
  openName: "",
  close: () => {},
  open: () => {},
});

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");
  const close = () => setOpenName("");
  const open = (windowName: string) => setOpenName(windowName);
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opensWindowName,
}: {
  children: ReactNode;
  opensWindowName: string;
}) {
  const { open } = useContext(ModalContext);
  return cloneElement(children as React.ReactElement, {
    onClick: () => open(opensWindowName),
  });
}

function Window({
  children,
  opensWindowName,
}: {
  children: ReactNode;
  opensWindowName: string;
}) {
  const { openName, close } = useContext(ModalContext);
  if (opensWindowName !== openName) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          onClick={close}
          className={styles.button}
          children={<HiXMark />}
        />
        {children}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
