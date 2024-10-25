type IProps = {
  size?: 'base' | 'large';
  inverse?: boolean;
  inverseColor?: string;
};

const AlertCircleIcon: React.FC<IProps> = ({
  size = 'base',
  inverse = false,
  inverseColor = '',
}) => {
  let sizeStyle = 'w-4 h-4';

  switch (size) {
    case 'base':
      break;

    case 'large':
      sizeStyle = 'w-5 h-5';
      break;
  }

  return (
    <svg
      className={`${sizeStyle} fill-none`}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_182_3692)">
        <path
          d="M8.00016 5.3335V8.00016M8.00016 10.6668H8.00683M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016Z"
          className={inverse ? inverseColor : 'stroke-error-normal'}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_182_3692">
          <rect className={`${sizeStyle} fill-base-white`} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AlertCircleIcon;
