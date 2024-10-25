type IProps = {
  size?: "small" | "base" | "large";
  inverse?: boolean;
  inverseColor?: string;
};

const XCloseIcon: React.FC<IProps> = ({
  size = "base",
  inverse = false,
  inverseColor = "stroke-warning-normal",
}) => {
  let sizeStyle = "w-5 h-5";

  switch (size) {
    case "base":
      break;

    case "large":
      sizeStyle = "w-6 h-6";
      break;
  }
  return (
    <svg
      className={`${sizeStyle} fill-none`}
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6.5L6 18.5M6 6.5L18 18.5"
        className={`stroke-2 ${
          inverse ? inverseColor : "stroke-success-normal"
        }`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default XCloseIcon;
