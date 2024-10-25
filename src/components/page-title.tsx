import BlockIcon from "./icons/block-icon";
import Title from "./title";

type IProps = {
  title: string;
  button?: React.ReactNode;
  secondButton?: React.ReactNode;
  hidden?: boolean;
  backUrl?: string;
};

const PageTitle: React.FC<IProps> = ({
  title,
  button,
  secondButton,
  hidden,
}) => {
  return (
    <div className="flex justify-between h-20 mt-10">
      <div className="flex gap-x-4 items-center">
        <BlockIcon />
        <Title className="text-primary-normal" title={title} />
      </div>

      <div className="flex items-center  gap-4 ">
        <div className="flex items-center gap-2">
          <div>{!hidden && secondButton}</div>
          <div className="w-56">{!hidden && button}</div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
