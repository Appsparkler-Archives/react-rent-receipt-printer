// enum SVGIconsEnum {
//   PrinterFill = "printer-fill",
// }

export type SVGIconType = "printer-fill" | "share-fill";

export const svgIcons = ["printer-fill", "share-fill"];

export interface ISVGIconProps {
  type: SVGIconType;
  className?: string;
}

export const SVGIcon = ({ type, className }: ISVGIconProps) => {
  switch (type) {
    case "printer-fill":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-printer-fill ${className}`}
          viewBox="0 0 16 16"
        >
          <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
          <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
        </svg>
      );

    case "share-fill":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-share-fill ${className}`}
          viewBox="0 0 16 16"
        >
          <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
        </svg>
      );

    default:
      return null;
  }
};
