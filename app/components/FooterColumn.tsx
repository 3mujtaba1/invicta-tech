import type { ReactNode } from "react";
import styles from "./FooterColumn.module.css";

type FooterColumnProps = {
  icon: ReactNode;
  heading: string;
  children: ReactNode;
};

export default function FooterColumn({ icon, heading, children }: FooterColumnProps) {
  return (
    <div className={styles.column}>
      <div className={styles.headerRow}>
        <div className={styles.iconBadge}>{icon}</div>
        <p className={styles.heading}>{heading}</p>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
