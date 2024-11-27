type IProps = {
    size?: "small" | "medium" | "large";
    color?: string;
  };
  
  export default function PersonIcon({
    size = "medium",
    color = "fill-current",
  }: IProps) {
    let style = "";
  
    switch (size) {
      case "small":
        style = "w-4 h-4";
        break;
      case "medium":
        style = "w-6 h-6";
        break;
      case "large":
        style = "w-8 h-8";
        break;
      default:
        style = "w-6 h-6";
    }
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="15.000000pt" height="15.000000pt" viewBox="0 0 25.000000 25.000000"
        preserveAspectRatio="xMidYMid meet">
       
       <g transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M55 230 c-28 -31 -10 -74 32 -78 25 -3 35 2 49 22 15 24 15 28 0 51
       -20 31 -56 33 -81 5z"/>
       <path d="M163 129 c-12 -4 -29 -19 -38 -33 -14 -21 -15 -29 -3 -53 17 -36 59
       -51 93 -33 68 36 20 146 -52 119z m33 -54 c13 -28 7 -40 -13 -24 -14 12 -18
       49 -5 49 4 0 12 -11 18 -25z"/>
       <path d="M30 117 c-19 -9 -26 -22 -28 -50 l-3 -37 50 0 c49 0 51 1 51 28 0 15
       3 37 6 50 6 19 3 22 -22 22 -16 0 -40 -6 -54 -13z"/>
       </g>
       </svg>
       
    );
  }
  