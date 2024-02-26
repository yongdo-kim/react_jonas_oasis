import Logo from "./Logo";
import MainNav from "./MainNav";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <Logo />
      <MainNav />
    </aside>
  );
}
