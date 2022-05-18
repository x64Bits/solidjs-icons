import { splitProps } from "solid-js";
import type { JSXElement, JSX } from "solid-js/types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      svg: {
        className?: string;
        style?: object;
        height?: number | string;
        width?: number | string;
        innerHTML: string;
        xmlns: string;
        strokeWidth?: string;
        viewBox?: string;
      };
      title: any;
    }
  }
}

export interface IconTree {
  a: {
    [key: string]: string;
  };
  c: string;
}

export interface IconProps extends JSX.SvgSVGAttributes<SVGElement> {
  size?: string | number;
  color?: string;
  title?: string;
  style?: object;
  className?: string;
  viewBox?: string;
}

export interface IconBaseProps extends IconProps {
  src: IconTree;
}

export declare type IconTypes = (props: IconProps) => JSXElement;

export default function IconTemplate(props: IconBaseProps): JSXElement {
  const [content, innerProps] = splitProps(props, ["src"]);

  return (
    <svg
      stroke={content.src.a.stroke}
      fill="currentColor"
      strokeWidth="0"
      style={{
        overflow: "visible",
        color: innerProps.color,
        ...innerProps.style,
      }}
      {...content.src.a}
      {...innerProps}
      height={innerProps.size || "1em"}
      width={innerProps.size || "1em"}
      innerHTML={content.src.c}
      xmlns="http://www.w3.org/2000/svg"
    >
      {innerProps.title && <title>{innerProps.title}</title>}
    </svg>
  );
}
