import BlockIcon from "./icons/block-icon";
import Title from "./title";

type IProps = {
  title: string;
  button?: React.ReactNode;
  secondButton?: React.ReactNode;
  hidden?: boolean;
  backUrl?: string;
  className?: string; // Add className prop
};

const PageTitle: React.FC<IProps> = ({
  title,
  button,
  secondButton,
  hidden,
  className,
}) => {
  return (
    <div
      className={`flex justify-between mt-5 h-20 rounded-lg py-4 bg-base-white pr-4 w-full ${
        className || ""
      }`}
    >
      <div className="flex gap-x-4 items-center">
        <div className="w-2 h-full bg-primary-normal rounded-sm"></div>
        <Title className="text-primary-normal" title={title} />
      </div>

      <div className="flex items-center gap-4 w-full justify-end">
        <div className="flex items-center gap-2">
          <div>{!hidden && secondButton}</div>
          <div className="flex justify-center w-full">{!hidden && button}</div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
