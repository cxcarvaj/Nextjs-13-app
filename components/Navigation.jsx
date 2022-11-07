import Link from "next/link";
import styles from './Navigation.module.css';

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Posts",
    path: "/posts",
  }
];

export function Navigation() {
    return(
        <header className={styles.header}>
          <nav>
            <ul className={styles.navigation}>
              {links.map(({label, path}) => {
                return(
                <li key={path}>
                  <Link href={path}>{label}</Link>
                </li>
                );
              })}
            </ul>
          </nav>
        </header>
    )
}