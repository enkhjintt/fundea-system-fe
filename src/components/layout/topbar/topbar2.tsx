import Button from "@/components/button";
import DonatiaIcon from "@/components/icons/donatia-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IProps = {};

const TopBar2: React.FC<IProps> = ({}) => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "active" : "text-gray-600";

  return (
    <div className="flex justify-between items-center w-full h-24 bg-base-white px-20 border-b border-gray-300 text-primary-normal">
      <Link href="/home">
        <Button variant="icon" icon={<DonatiaIcon />} />
      </Link>
      <div className="flex gap-10">
      </div>
      <Link className={`link ${isActive("/auth/login")}`} href="/auth/login">
        <div> Асуулт хариулт </div>
      </Link>
    </div>
  );
};

export default TopBar2;
