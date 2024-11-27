"use client";

import PageTitle from "@/components/page-title";
import Image from "next/image";
import Button from "@/components/button";
import ProjectDisplayItem from "@/components/items/project-display-item";
import PinkTitle from "@/components/pink-title";
import IconCardItem from "@/components/icon-card";
import ProjectProgressCardItem from "@/components/items/project-progress-item";
import Wrapper from "@/components/wrapper";

type IProps = {};

const ViewDonation: React.FC<IProps> = ({}) => {
  const dummyData = {
    title: "Монгол вебтүүн төсөл",
    subtitle: '"Гажууд ертөнц" вебтүүн төсөл',
    description: "webtoon project",
    imageUrl: "/image/project/image.png",
    desc: "Дэлхий дахинд нэгэнт эрчээ авч буй зурагт ном буюу манга, манхва, комикуудын зах зээлийг Монголд дэлгэрүүлэн таниулж, Монголчуудын зурагт ном зөвхөн хүүхдэд зориулсан гэх хэвшмэл ойлголтыг өөрчилж, дараа дараагийн шинээр төрөх Монгол зурагт номын салбарын үүд хаалгыг нээхээр зорьж байна. Бид бүгд л манга гэхээр Япон анимэ, комик гэхээр Marvel баатруудыг хамгийн түрүүнд төсөөлдөг билээ. Тэгвэл хэдүүлээ яагаад өөрсдийн гэсэн поп соёл болон онцлогийг харуулж, таниулах зурагт номыг төсөөлдөг байж болохгүй гэж? Энэ асуултын хариулт нь Гажууд Ертөнц юм.",
    writer:
      "LimeHub Youtube Channel-тэй танилцах: https://www.youtube.com/@LimeHub09",
    history:
      "Одоо тэгвэл төслийнхөө түүхийг хуваалцъя.  2021 онд ковидын цар тахлын үеэр комик, манга, вэбтүүн гэх мэт зурагт номууд дэлхийд эрчийг аван одоог хүртэл зогсолтгүй дэлгэрсээр байна. Түүнээс Солонгос вэбтүүн нь харьцангуй саяхан төрөн гарч ирсэн хэдий ч, хуучны акулууд болох Японы манга, барууны комикуудтай эн зэрэгцэн үү гэхээс, доор нь орохгүй байгаа нь яагаад Монголчууд ч гэсэн тэднээс суралцаж өөрсдийн гэсэн зурагт номуудыг бүтээж болохгүй гэж гэсэн бодол толгойд минь орж ирсэн юм. Үүний дараагаар зохиолоо бичиж эхэлснээр RedHero Studio-г анх байгуулав. Ингээд 2023 онд эхний бүлэг бэлэн болж, зурагт номоо байршуулах саитаа өөрсдөө хийж www.mngs.mn гэх манга орчуулгын багийг бүтээсэн. Мөн зурагт номныхоо маркетингийг хийхийн тулд LimeHub Youtube Channel-ийг үүсгэсэн юм.",
    risk: "Эрсдэл: Цаг хугацааны алдагдал Зураачдын байдлаас болж, товлогдсон цагаасаа хоцорч гарах эрсдэлтэй. Эрсдэлийг шийдэх нь: Олон зураачидтай хамтран, цалинжуулж төслийг чанартай бөгөөд, хурдан хугацаанд гаргах. Хэрэв нэг төсөл дээр ганц хоёр бус дөрөв, таван зураач ажиллавал эрсдэлийг даруй шийдэх боломжтой. Гэсэн ч цаашид хамтран зурах зураачдаа цалинжуулах үүднээс санхүүжилт босгох шаардлагатай болоод байна.",
  };

  return (
    <>
      <PageTitle title={"Санхүүжилт олгох"} />
     
      <ProjectDisplayItem
        title={dummyData.title}
        subtitle={dummyData.subtitle}
        description={dummyData.description}
        imageUrl={dummyData.imageUrl}
      />

      

      <div className="flex flex-row gap-8 ">
        <Wrapper className="w-3/4  grid grid-cols-1 p-6">
          <PinkTitle title={"Төслийн дэлгэрэнгүй"} desc={dummyData.desc} />
          <Image
            className="mt-2 mb-2 shadow-lg rounded-2xl"
            src="/image/project/image3.jpg"
            alt="webtoon project"
            width={980}
            height={537}
          />
          <PinkTitle title={"Төслийн түүх"} desc={dummyData.history} />
          <PinkTitle title={"Төслийн эрсдэл"} desc={dummyData.risk} />
          <PinkTitle title={"Төсөл хэрэгжүүлэгч"} desc={dummyData.writer} />
          <p className="text-sm mt-3">
            MANGAS манга багтай танилцах: www.mngs.mn
          </p>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <IconCardItem message="Төслийн хугацаа дуусаагүй тохиолдолд санхүүжилтээ буцаан авах боломжгүй." />
            <IconCardItem
              message="Төсөлд гарч болзошгүй эрсдэлийг судлах нь санхүүжилт олгогчийн өөрийн хариуцлага болно."
            />

            <Button
              variant="gradient"
              placeholder="Гомдол мэдүүлэх"
              textVariant="gradient"
            />
          </div>
        </Wrapper>

        <div className="w-1/4 ">
          
          <ProjectProgressCardItem
            totalAmount={20000000}
            collectedAmount={10000000}
            remainingDays={7}
            validProgress={50}
            progressColor="bg-secondary-normal"
          />
        </div>
      </div>
    </>
  );
};

export default ViewDonation;