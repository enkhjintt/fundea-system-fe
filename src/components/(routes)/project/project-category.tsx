"use client";

import Button from "@/components/button";
import HeartIcon from "@/components/icons/art-icon";
import BallIcon from "@/components/icons/ball-icon";
import ClothesIcon from "@/components/icons/clothes-icon";
import EventIcon from "@/components/icons/event-icon";
import ArtIcon from "@/components/icons/heart-icon";
import OtherIcon from "@/components/icons/other-icon";
import RobotIcon from "@/components/icons/robot-icon";
import PageTitle from "@/components/page-title";

type IProps = {};

const ProjectCategory: React.FC<IProps> = ({}) => {
  return (
    <>
      <div className="flex flex-row gap-4 h-36">
        <Button
          variant="rectangle"
          placeholder="Технолги"
          textVariant="rectangle"
          icon={<RobotIcon />}
        />
        <Button
          variant="rectangle"
          placeholder="Урлаг соёл"
          textVariant="rectangle"
          icon={<ArtIcon />}
        />
        <Button
          variant="rectangle"
          placeholder="Арга хэмжээ"
          textVariant="rectangle"
          icon={<EventIcon />}
        />
        <Button
          variant="rectangle"
          placeholder="Хувцас дизайн"
          textVariant="rectangle"
          icon={<ClothesIcon />}
        />
        <Button
          variant="rectangle"
          placeholder="Эрүүл мэнд"
          textVariant="rectangle"
          icon={<HeartIcon />}
        />
        <Button
          variant="rectangle"
          placeholder="Cпорт"
          textVariant="rectangle"
          icon={<BallIcon />}
        />
        <Button
          variant="rectangle"
          placeholder="Хоол хүнс"
          textVariant="rectangle"
          icon={<HeartIcon />}
        />
        <Button
          variant="rectangle"
          placeholder="Бусад"
          textVariant="rectangle"
          icon={<OtherIcon />}
        />
      </div>
    </>
  );
};

export default ProjectCategory;
