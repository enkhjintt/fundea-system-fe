"use client";

import { LogoutOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { signOut } from "next-auth/react";
import UserIcon from "@/components/icons/funded-project-icon";
import { useProfile } from "@/hooks/use-profile";

const ProfileDropdown: React.FC = () => {
  const { data: user } = useProfile();
  const [isOpen, setIsOpen] = useState(false);
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();

  const handleProfileClick = () => {
    router.push(`/profile`);
  };

  const menu = (
    <Menu>
      <Menu.Item key="2" onClick={handleProfileClick}>
        <div className="flex">
          <UserIcon size="small" />
          <span className="px-3 ">Профайл</span>
        </div>
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={async () => {
          await signOut({ redirect: true, callbackUrl: "" });
        }}
      >
        <LogoutOutlined />
        <span className="px-3 ">Гарах</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu as any}
      trigger={["click"]}
      onOpenChange={(flag) => setIsOpen(flag)}
      open={isOpen}
    >
      <div className="dropdown-toggle h-9 pl-2 cursor-pointer ">
        <div className="flex flex-row gap-2 items-center">
          <Avatar size={36} src={""} className="bg-primary-normal">
            {user?.ner.charAt(0)}
          </Avatar>
        </div>
      </div>
    </Dropdown>
  );
};

export default ProfileDropdown;
