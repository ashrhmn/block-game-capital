import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h2 className={styles.hero_header}>Introducing Block Game Capital</h2>
      <span>💠</span>
    </div>
  );
}
