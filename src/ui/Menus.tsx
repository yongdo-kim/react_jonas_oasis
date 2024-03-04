import {
  ButtonHTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import styles from "./Menus.module.css";

type MenuProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type MenuContextType = {
  openId: number;
  positon: { x: number; y: number };
  close: () => void;
  open: (id: number) => void;
  setPosition: ({ x, y }: { x: number; y: number }) => void;
};

const MenusContext = createContext<MenuContextType>({
  openId: -1,
  positon: { x: 0, y: 0 },
  close: () => {},
  open: () => {},
  setPosition: () => {},
});
export default function Menus({ children }: MenuProps) {
  const [openId, setOpenId] = useState<number>(-1);
  const [positon, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const close = () => setOpenId(-1);
  const open = (id: number) => setOpenId(id);

  return (
    <MenusContext.Provider
      value={{ openId, close, open, positon, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }: { children: ReactNode }) {
  return <div className={styles.menu}>{children}</div>;
}

function Toggle({ id }: { id: number }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e: React.MouseEvent) {
    const targetElement = e.target as HTMLElement;
    const rect = targetElement.closest("button")?.getBoundingClientRect();
    if (rect) {
      setPosition({
        x: window.innerWidth - rect?.width - rect.x,
        y: rect.y + rect?.height + 8,
      });
    }

    openId === -1 || openId !== id ? open(id) : close();
  }

  return (
    <div className={styles.toggle} onClick={handleClick}>
      <HiEllipsisVertical />
    </div>
  );
}

function List({ id, children }: { id: number; children: ReactNode }) {
  const { openId, positon } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);
  if (openId !== id) return null;
  return createPortal(
    <div
      className={styles.list}
      style={{ top: positon.x, right: positon.y }}
      ref={ref}
    >
      {children}
    </div>,
    document.body
  );
}

function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li className={styles.button} onClick={handleClick}>
      {children}
    </li>
  );
}

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
Menus.Menu = Menu;
