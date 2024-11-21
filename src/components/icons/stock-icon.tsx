type IProps = {
  size?: "medium";
  color?: string;
};

export default function StockIcon({
  size = "medium",
  color = "fill-primary-normal",
}: IProps) {
  let style = "w-6 h-6";

  switch (size) {
    case "medium":
      break;
  }

  return (
    <svg
      className={`${style} ${color}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18H4V10H9V18ZM7 16V12H6V16H7ZM13 16V8H12V16H13ZM15 18H10V6H15V18ZM19 16V4H18V16H19ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z"
        className="fill-current"
      />
    </svg>
  );
}
