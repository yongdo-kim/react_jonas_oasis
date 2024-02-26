import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.div}>
      <img src='/logo-light.png' alt='Logo' />
    </div>
  );
}

export default Logo;
