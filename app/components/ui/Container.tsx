import * as React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
};

export function Container({
  as: Tag = "div",
  className,
  children,
  ...rest
}: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={[
        "mx-auto w-full max-w-6xl px-6 sm:px-8",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Container;