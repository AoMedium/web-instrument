import { Edge } from "../../domain/Constants";
import styles from "./KeyGroup.module.css";

type Props = {
  position: Edge[]
  children: JSX.Element[]
}

const MARGIN = 15;

const posStyles = {
  top: {
    top: MARGIN,
    alignContent: "top",
  } as React.CSSProperties,
  bottom: {
    bottom: MARGIN,
  } as React.CSSProperties,
  left: {
    left: MARGIN,
  } as React.CSSProperties,
  right: {
    right: MARGIN,
    // justifyContent: "right",
  } as React.CSSProperties
};

export default function KeyGroup(props: Props) {

  let style: React.CSSProperties = {};
  
  if (props.position.includes(Edge.TOP)) {
    style = {...style, ...posStyles.top};
  } else if (props.position.includes(Edge.BOTTOM)) {
    style = {...style, ...posStyles.bottom};
  } 

  if (props.position.includes(Edge.LEFT)) {
    style = {...style, ...posStyles.left};
  } else if (props.position.includes(Edge.RIGHT)) {
    style = {...style, ...posStyles.right};
  }

  return (
    <div className={styles.group} style={style}>
      {props.children}
    </div>
  );
}