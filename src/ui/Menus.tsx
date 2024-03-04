import { ReactNode } from "react";

type MenuProps = {
  children: ReactNode;
};

export default function Menus({ children }: MenuProps) {
  return <div>{children}</div>;
}
