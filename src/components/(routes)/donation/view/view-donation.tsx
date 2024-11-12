"use client";

import PageTitle from "@/components/page-title";
import Image from "next/image";
import Button from "@/components/button";
import GiftIcon from "@/components/icons/gift-icon";
import PinkBar from '@/components/pink-bar';


type IProps = {};

const ViewDonation: React.FC<IProps> = ({}) => {
  return (
    <>
          <PageTitle title={"Санхүүжилт олгох"} />
          <h1 className="text-4xl font-semibold">Монгол вебтүүн төсөл</h1>
          <p className="text-sm">"Гажууд ертөнц" вебтүүн төсөл</p>
          <Image className="mt-4 mb-4 shadow-lg"
            src="/image/project/image.png" 
            alt="webtoon project"
            width={1440}
            height={748}
          />

        <div className="flex flex-row flex justify-between">
          <div className="w-[70%]  grid grid-cols-5 gap-2">
            <Button
              variant="rectangle"
              placeholder="Дэлгэрэнгүй"
              textVariant="rectangle"
            />
            <Button
              variant="rectangle"
              placeholder="Эрсдэл"
              textVariant="rectangle"
            />
            <Button
              variant="rectangle"
              placeholder="Үйл явц"
              textVariant="rectangle"
            />
            
            <Button
              variant="rectangle"
              placeholder="Сэтгэгдэл"
              textVariant="rectangle"
            />
            <Button
              variant="rectangle"
              placeholder="FAQ"
              textVariant="rectangle"
            />

            <div className="col-span-5">
              <p className="text-base mt-6 mb-4"> Монгол улсад өрнөх үйл явдалтай вэбтүүн цувралтай болмоор байна уу? </p>
              <Image className="mt-2 mb-2 shadow-lg rounded-2xl"
                src="/image/project/image3.jpg"
                alt="webtoon project"
                width={980}
                height={537}
              />
              <p className="text-sm">
              Дэлхий дахинд нэгэнт эрчээ авч буй зурагт ном буюу манга, манхва, комикуудын зах зээлийг Монголд дэлгэрүүлэн таниулж, Монголчуудын зурагт ном\зөвхөн хүүхдэд зориулсан\ гэх хэвшмэл ойлголтыг өөрчилж, дараа дараагийн шинээр төрөх Монгол зурагт номын салбарын үүд хаалгыг нээхээр зорьж байна. Бид бүгд л манга гэхээр Япон анимэ, комик гэхээр Marvel баатруудыг хамгийн түрүүнд төсөөлдөг билээ. Тэгвэл хэдүүлээ яагаад өөрсдийн гэсэн поп соёл болон онцлогийг харуулж, таниулах зурагт номыг төсөөлдөг байж болохгүй гэж? Энэ асуултын хариулт нь "Гажууд Ертөнц" юм.
              </p>

              <div className="flex items-center space-x-2">
                <PinkBar />
                <h1 className="text-xl mt-5">Төслийн түүх</h1>
              </div>
              <p className="text-sm mt-5">
                  Одоо тэгвэл төслийнхөө түүхийг хуваалцъя. 

                  2021 онд ковидын цар тахлын үеэр комик, манга, вэбтүүн гэх мэт зурагт номууд дэлхийд эрчийг аван одоог хүртэл зогсолтгүй дэлгэрсээр байна. Түүнээс Солонгос вэбтүүн нь харьцангуй саяхан төрөн гарч ирсэн хэдий ч, хуучны акулууд болох Японы манга, барууны комикуудтай эн зэрэгцэн үү гэхээс, доор нь орохгүй байгаа нь яагаад Монголчууд ч гэсэн тэднээс суралцаж өөрсдийн гэсэн зурагт номуудыг бүтээж болохгүй гэж гэсэн бодол толгойд минь орж ирсэн юм. Үүний дараагаар зохиолоо бичиж эхэлснээр RedHero Studio-г анх байгуулав.
              </p>
              <Image className="mt-3 mb-3 shadow-lg rounded-2xl"
                src="/image/project/image4.jpg"
                alt="webtoon project"
                width={980}
                height={537}
              />
              <p className="text-sm">
                Ингээд 2023 онд эхний бүлэг бэлэн болж, зурагт номоо байршуулах саитаа өөрсдөө хийж www.mngs.mn гэх манга орчуулгын багийг бүтээсэн. Мөн зурагт номныхоо маркетингийг хийхийн тулд LimeHub Youtube Channel-ийг үүсгэсэн юм.
              </p>
              <Image className="mt-3 mb-3 shadow-lg rounded-2xl"
                src="/image/project/image5.jpg"
                alt="webtoon project"
                width={980}
                height={537}
              />
              <p className="text-sm">
                LimeHub Youtube Channel-тэй танилцах: https://www.youtube.com/@LimeHub09
              </p>
              <p className="text-sm mt-3">
                MANGAS манга багтай танилцах: www.mngs.mn
              </p>
              <p className="text-sm mt-3">
               Гэсэн ч цаашид хамтран зурах зураачдаа цалинжуулах үүднээс санхүүжилт босгох шаардлагатай болоод байна.
              </p>


              <div className="flex flex-row flex justify-between mt-10 flex flex-wrap">
                <div className="text-sm font-semibold w-[400px] h-[211px] rounded-[10px] border border-[#F5F5F5] p-4 flex flex-col items-center justify-center space-y-2 text-center">
                  <GiftIcon/>
                  Төслийн хугацаа дуусаагүй тохиолдолд санхүүжилтээ буцаан авах боломжгүй.
                </div>
                <div className="text-sm font-semibold w-[400px] h-[211px] rounded-[10px] border border-[#F5F5F5] p-4 flex flex-col items-center justify-center space-y-2 text-center mb-10">
                  <GiftIcon/>
                  Төсөлд гарч болзошгүй эрсдэлийг судлах нь санхүүжилт олгогчийн өөрийн хариуцлага болно.
                </div>
                <p className="text-sm mt-3">
                  Төсөлтэй холбоотой асуулт байвал 
                  <span className="underline"> FAQ </span>
                  орж үзнэ үү.
                </p>
                <Button
                  variant="gradient"
                  placeholder="Гомдол мэдүүлэх"
                  textVariant="gradient"
                />
              </div>
            </div>
          </div>


          <div className="basis-1/4 w-[329px] h-[648px] rounded-[10px] border border-[#F5F5F5] text-sm p-4" >
            Нийт цуглуулах дүн: 20’000’000₮  
            Нийт цугласан дүн: 10’000’000₮ 
            Төсөл байршиж дуусах хугацаа: 7 хоног
            <Button
              variant="gradient"
              placeholder="Санхүүжүүлэх"
              textVariant="gradient"
            />
            <Button
              variant="secondary"
              placeholder="Хуваалцах"
              textVariant="gradient"
              icon= {<GiftIcon/>}
            />

          </div>



        </div>
    </>
  );
};

export default ViewDonation;