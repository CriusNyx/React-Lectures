import type { PropsWithChildren } from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

export function Input(props: InputProps) {
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    ></input>
  );
}

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
}

export function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
