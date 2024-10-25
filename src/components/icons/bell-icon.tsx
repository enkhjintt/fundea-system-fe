type IProps = {
  size?: "medium";
  color?: string;
};

export default function BellIcon({
  size = "medium",
  color = "fill-gray-800",
}: IProps) {
  let style = "w-8 h-8";

  switch (size) {
    case "medium":
      break;
  }

  return (
    <svg
      className={`${style} fill-none`}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.29167 26.2498H27.7083V16.0873C27.7083 10.4241 23.1379 5.83317 17.5 5.83317C11.8621 5.83317 7.29167 10.4241 7.29167 16.0873V26.2498ZM17.5 2.9165C24.7488 2.9165 30.625 8.81325 30.625 16.0873V29.1665H4.375V16.0873C4.375 8.81325 10.2513 2.9165 17.5 2.9165ZM13.8542 30.6248H21.1458C21.1458 32.6384 19.5135 34.2707 17.5 34.2707C15.4865 34.2707 13.8542 32.6384 13.8542 30.6248Z"
        className={color}
      />
    </svg>
  );
}
