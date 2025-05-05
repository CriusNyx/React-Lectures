import type { PropsWithChildren } from "react";
import "./Row.css";

export function Row(props: PropsWithChildren) {
  return <div className="row">{props.children}</div>;
}
