import type { PropsWithChildren } from "react";
import "./Col.css";

export function Col(props: PropsWithChildren) {
  return <div className="col">{props.children}</div>;
}
