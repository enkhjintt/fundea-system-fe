type IProps = {
  size?: "medium";
  color?: string;
};

export default function EventIcon({
  size = "medium",
  color = "fill-primary-normal",
}: IProps) {
  let style = "w-8 h-8";

  switch (size) {
    case "medium":
      break;
  }

  return (
    <svg
      className={`${style} ${color}`}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0002 1.66675V5.00008H25.0002V1.66675H28.3335V5.00008H35.0002C35.9207 5.00008 36.6668 5.74628 36.6668 6.66675V33.3334C36.6668 34.2539 35.9207 35.0001 35.0002 35.0001H5.00016C4.0797 35.0001 3.3335 34.2539 3.3335 33.3334V6.66675C3.3335 5.74628 4.0797 5.00008 5.00016 5.00008H11.6668V1.66675H15.0002ZM33.3335 18.3334H6.66683V31.6667H33.3335V18.3334ZM13.3335 23.3334V26.6667H10.0002V23.3334H13.3335ZM30.0002 23.3334V26.6667H16.6668V23.3334H30.0002ZM11.6668 8.33341H6.66683V15.0001H33.3335V8.33341H28.3335V11.6667H25.0002V8.33341H15.0002V11.6667H11.6668V8.33341Z"
        className="fill-current"
      />
    </svg>
  );
}
