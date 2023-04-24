import { NavLink } from "react-router-dom";
import styles from './NavButton.module.css';


type Props = {
  to: string
  children: string
}

export default function NavButton(props: Props) {
  return (
    <NavLink className={styles.link} to={props.to}>{props.children}</NavLink>
  );
}