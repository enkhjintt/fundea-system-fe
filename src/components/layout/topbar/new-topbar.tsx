import Button from "@/components/button";
import DonatiaIcon from "@/components/icons/donatia-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IProps = {};

const NewTopbar: React.FC<IProps> = ({}) => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "active" : "text-gray-600";

  return (
    <div className="flex justify-between items-center w-full h-24 bg-base-white px-20 border-b border-gray-300 text-primary-normal">
      <Link href="/home">
        <Button variant="icon" icon={<DonatiaIcon />} />
      </Link>
      <div className="flex gap-10">
        <Link className={`link ${isActive("/donation")}`} href="/donation">
          <div>Санхүүжилт олгох</div>
        </Link>
        <Link className={`link ${isActive("/project")}`} href="/project">
          <div>Төсөл оруулах</div>
        </Link>
      </div>
      <Link className={`link ${isActive("/auth/login")}`} href="/auth/login">
        <div>Profile</div>
      </Link>
    </div>
  );
};

export default NewTopbar;
