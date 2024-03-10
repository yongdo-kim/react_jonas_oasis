import styles from "./UserAvatar.module.css";
import { useUser } from "./useUser";

export default function UserAvatar() {
  const { user } = useUser();
  const fullName: string = user?.user_metadata["fullName"];
  const avatar: string = user?.user_metadata["avatar"];

  return (
    <div className={styles.styledUserAvatar}>
      <img
        className={styles.avatar}
        src={avatar || "default-user.jpg"}
        alt='Avatar'
      />
      <span>{fullName}</span>
    </div>
  );
}
