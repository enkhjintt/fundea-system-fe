"use client";

import React from "react";
import Button from "@/components/button";
import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import PinkTitle from "@/components/pink-title";

type IProps = {};

const UserProfile: React.FC<IProps> = () => {
  return (
    <div /*style={{backgroundColor: '#FFFFFF'}}*/>
    <PageTitle title={"Профайл"}/>
    <div
  style={{
    width: "320px",
    height: "190px",
    backgroundColor: "white",
    marginBottom: "12px",
    display: "flex", // Төвд байрлуулахын тулд
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold", // Текстийг bold болгох
    fontSize: "18px", // Текстийн хэмжээг тохируулах
  }}
>
  Б. Өлзийнаран
</div>

    <div style={{marginBottom:'12px'}}>
        <Button variant="gray" textVariant="gray" placeholder="Хувийн мэдээлэл" icon="user-icon.png"/>
        <Button variant="gray" textVariant="gray" placeholder="Санхүүжүүлсэн төсөл" />
        <Button variant="gray" textVariant="gray" placeholder="Миний төсөл" />
        <Button variant="gray" textVariant="gray" placeholder="Хадгалсан төсөл" />
        <Button variant="gray" textVariant="gray" placeholder="Гүйлгээний түүх" />
        <Button variant="gray" textVariant="gray" placeholder="Нууцлалын бодлого" />
        <Button variant="gray" textVariant="gray" placeholder="Тохиргоо" />
    </div>
    <div>
        <Button variant="gray" textVariant="gray" placeholder="Гарах" />
    </div>
    <div >
      Ерөнхий мэдээлэл
    </div>
    </div>
  );
};

export default UserProfile;
