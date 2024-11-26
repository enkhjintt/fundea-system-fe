"use client";

import CheckboxGroup from "@/components/group-checkbox";

type IProps = {};

const SideMenu: React.FC<IProps> = ({}) => {
  const handleCheckboxChange = (checkedValues: string[]) => {
    console.log("Checked values:", checkedValues);
  };

  const options = [
    { label: "Эрүүл мэнд", value: "A" },
    { label: "Технологи", value: "1" },
    { label: "Спорт", value: "C" },
    { label: "Урлаг соёл", value: "2" },
    { label: "Хоол хүнс", value: "3" },
    { label: "Бусад", value: "F" },
  ];

  const statusOptions = [
    { label: "Шинээр үүссэн", value: "2" },
    { label: "Хэрэгжиж байгаа", value: "3" },
    { label: "Хугацаа дууссан (Амжилттай)", value: "7" },
    { label: "Хугацаа дууссан (Амжилтгүй)", value: "4" },
  ];

  const percentageOptions = [
    { label: "50%", value: "1" },
    { label: "50-75%", value: "2" },
    { label: "75-100%", value: "3" },
  ];
  const customerOptions = [
    { label: "Хувь хүн", value: "1" },
    { label: "Байгууллага", value: "2" },
  ];
  return (
    <div className="p-4">
      <CheckboxGroup
        label="Ангилал"
        options={options}
        onChange={handleCheckboxChange}
      />
      <CheckboxGroup
        label="Төслийн төлөв"
        options={statusOptions}
        onChange={handleCheckboxChange}
      />
      <CheckboxGroup
        label="Санхүүжилтийн хувь"
        options={percentageOptions}
        onChange={handleCheckboxChange}
      />
      <CheckboxGroup
        label="Төсөл үүсгэгч төрөл"
        options={customerOptions}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default SideMenu;
