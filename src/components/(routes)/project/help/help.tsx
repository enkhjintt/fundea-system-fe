import Button from "@/components/button";
import CollapseComponent from "@/components/collapse";
import PlusIcon from "@/components/icons/plus-icon";
import Title from "@/components/title";
import React from "react";

const ProjectHelp: React.FC = () => {
  const collapseItems = [
    {
      key: "1",
      label: "Төсөл үүсгэх хэдэн үе шаттай вэ?",
      children: (
        <ul>
          <li>1. Төсөл үүсгэх нийт 6 үе шаттай. Үүнд:</li>
          <li>2. Ерөнхий мэдээлэл оруулах</li>
          <li>3. Дэлгэрэнгүй төслийн мэдээлэл оруулах</li>
          <li>4. Төслийн төрөл сонгох: Урамшуулал/хандив</li>
          <li>5. Багийн гишүүдийн мэдээлэл оруулах</li>
          <li>6. Санхүүгийн мэдээлэл оруулах</li>
          <li>7. Тухайн төсөлтэй холбоотой FAQ оруулах</li>
        </ul>
      ),
    },
    {
      key: "2",
      label:
        "Санхүүжилт олгосон хувь хүн байгууллагуудтай хэрхэн холбогдож урамшууллаа өгөх вэ?",
      children: (
        <p>
          Таны төслийг дэмжсэн санхүүжилт олгогчийн холбоо барих мэдээллийг та
          төслийн дэлгэрэнгүй дотроос харах боломжтой.
        </p>
      ),
    },
    {
      key: "3",
      label: "Санхүүжилт босгох хугацаа хэр урт вэ?",
      children: <p>15, 30, 45, 60, 90 хоногийн сонголттой байна.</p>,
    },
    {
      key: "4",
      label: "Төсөл хянах хугацаа байгаа юу? байгаа бол хэдэн хоног байх вэ?",
      children: (
        <p>
          Donatia ХХК нь хүсэлт хүлээн авснаас хойш ажлын 5 хоногт төслийг
          хянана.
        </p>
      ),
    },
    {
      key: "5",
      label: "Үйлчилгээний шимтгэл байгаа юу?",
      children: (
        <p>
          Төсөл амжилттай санхүүжилт босгосон үед нийт санхүүжилтийн 7-12%
          байна.
        </p>
      ),
    },
    {
      key: "6",
      label:
        "Төсөл амжилттай санхүүжилт босгосон үед санхүүжилт олгосон хүмүүст төслийн явцыг хэрхэн мэдэгдэх вэ?",
      children: (
        <p>
          Төсөл хэрэгжүүлэгч тухайн төслийн дэлгэрэнгүй хэсэгт байрших “Үйл Явц”
          хэсэгт төслийн явцын мэдээллийг оруулна.
        </p>
      ),
    },
    {
      key: "7",
      label:
        "Төсөл байршуулсан хугацаанд санхүүжилтээ босгож чадаагүй тохиолдолд яах вэ?",
      children: (
        <p>
          Хэрэв зорилтот хугацаандаа санхүүжилтээ босгож чадаагүй бол нийт
          боссон санхүүжилт нь санхүүжилт олгогч тус бүрт буцаан олгогдоно.
        </p>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          icon={<PlusIcon />}
          placeholder="Төсөл оруулах"
          variant="gradient"
          textVariant="gradient"
        />
      </div>
      <div className="flex justify-center">
        <Title level={4} title={"Түгээмэл асуулт хариултууд"} />
      </div>

      <CollapseComponent items={collapseItems} />
    </div>
  );
};

export default ProjectHelp;
