import BreadCrumb from "./breadcrumb";
import Button from "./button";

import Link from "next/link";

type IProps = {
  links?: {
    href: string;
    label: string;
    noLink?: boolean;
  }[];
  button?: React.ReactNode;
  secondButton?: React.ReactNode;
  hidden?: boolean;
  backUrl?: string;
};

const PageHeader: React.FC<IProps> = ({
  links,
  button,
  secondButton,
  hidden,
  backUrl,
}) => {
  return (
    <div className="flex justify-between ">
      <div>
        <div>{!hidden && button}</div>
      </div>
      <div className="flex justify-between w-full">
        <div>{links && <BreadCrumb links={links} />}</div>
      </div>

      <div className="flex items-center  gap-4">
        {backUrl && (
          <Link href={backUrl}>
            <Button placeholder="Буцах"></Button>
          </Link>
        )}
        <div className="flex items-center">
          <div>{!hidden && secondButton}</div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
