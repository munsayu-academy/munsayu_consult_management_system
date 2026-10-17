import type { ReactNode } from "react";
import styles from "./DocumentLink.module.css";

export default function DocumentLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return <a className={styles.link} href={href}>{children}</a>;
}
