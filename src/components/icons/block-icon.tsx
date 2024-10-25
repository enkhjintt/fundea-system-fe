type IProps = {
  size?: "base" | "md" | "large";
  inverse?: boolean;
  inverseColor?: string;
};

const BlockIcon: React.FC<IProps> = ({
  size = "base",
  inverse = false,
  inverseColor = "fill-gray-300",
}) => {
  let sizeStyle = "w-[20px] h-[50px]";

  switch (size) {
    case "base":
      break;

    case "md":
      sizeStyle = "w-7 h-7";
      break;

    case "large":
      sizeStyle = "w-10 h-10";
      break;
  }

  return (
    <svg
      className={`${sizeStyle}`}
      viewBox="0 0 20 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="50" rx="4" fill="#FF5555" />
    </svg>
  );
};

export default BlockIcon;
