"use client";

import UploadImageItem from "@/components/items/image-upload-item";
import { signOut } from "next-auth/react";

interface ProfileSidebarItem {
  name: string;
  key: string;
  onClick?: () => void;
}

const items: ProfileSidebarItem[] = [
  { name: "Хувийн мэдээлэл", key: "profile" },
  { name: "Миний төслүүд", key: "settings" },
  {
    name: "Гарах",
    key: "logout",
    onClick: async () => {
      await signOut({ redirect: true, callbackUrl: "" });
    },
  },
];

export const ProfileSidebar = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (key: string) => void;
}) => {
  return (
    <aside className="w-full h-screen bg-base-white text-gray-600 flex flex-col p-4 rounded-lg">
      <div className="flex items-center justify-center border-b-2 border-gray-100 mb-2 h-60">
        <UploadImageItem disabled />
      </div>
      <nav className="space-y-2">
        {items.map(({ name, key, onClick }) => (
          <button
            key={key}
            onClick={() => {
              if (onClick) {
                onClick(); // Call logout directly
              } else {
                setActiveItem(key); // Update the active item for other buttons
              }
            }}
            className={`flex items-center w-full gap-2 px-4 py-2 rounded-lg transition ${
              activeItem === key
                ? "bg-primary-normal text-base-white"
                : "text-gray-600 hover:bg-primary-normal hover:text-base-white"
            }`}
          >
            {name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
