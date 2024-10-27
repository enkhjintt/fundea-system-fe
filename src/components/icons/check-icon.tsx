type IProps = {
  size?: "medium";
  color?: string;
  inverse?: boolean;
  onClick?: () => void;
};

export default function CheckIcon({
  onClick,
  size = "medium",
  color = "fill-current",
  inverse = true,
}: IProps) {
  let style = "w-4 h-4";

  switch (size) {
    case "medium":
      break;
  }

  return (
    <svg
      className={`${style} `}
      viewBox="0 0 24 24"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"
        fill="white"
      />
    </svg>
  );
}
