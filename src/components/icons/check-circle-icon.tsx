type IProps = {
  size?: 'base' | 'md' | 'large';
  inverse?: boolean;
  inverseColor?: string;
};

const CheckCircleIcon: React.FC<IProps> = ({
  size = 'base',
  inverse = false,
  inverseColor = 'fill-gray-300',
}) => {
  let sizeStyle = 'w-5 h-5';

  switch (size) {
    case 'base':
      break;

    case 'md':
      sizeStyle = 'w-7 h-7';
      break;

    case 'large':
      sizeStyle = 'w-10 h-10';
      break;
  }

  return (
    <svg
      className={`${sizeStyle} fill-none`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0.832031C4.93743 0.832031 0.833374 4.93609 0.833374 9.9987C0.833374 15.0613 4.93743 19.1654 10 19.1654C15.0626 19.1654 19.1667 15.0613 19.1667 9.9987C19.1667 4.93609 15.0626 0.832031 10 0.832031ZM14.3393 8.08795C14.6647 7.76252 14.6647 7.23488 14.3393 6.90944C14.0139 6.584 13.4862 6.584 13.1608 6.90944L8.75004 11.3202L6.8393 9.40944C6.51386 9.084 5.98622 9.084 5.66078 9.40944C5.33535 9.73488 5.33535 10.2625 5.66078 10.588L8.16078 13.088C8.48622 13.4134 9.01386 13.4134 9.3393 13.088L14.3393 8.08795Z"
        className={inverse ? inverseColor : 'fill-success-normal'}
      />
    </svg>
  );
};

export default CheckCircleIcon;
