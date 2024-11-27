import SignUpForm from "@/components/auth/sign-up/sign-up";

import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
  {/* Баруун талын хэсэг эхэнд бичигдэнэ */}
  <section className="w-1/2 flex flex-col justify-center items-center p-10">
    <SignUpForm />
  </section>

  {/* Зүүн талын зурагтай хэсэг */}
  <section className="w-1/2 h-screen relative flex justify-center items-center bg-gradient-to-r to-secondary-normal from-primary-normal">
    <div className="relative ml-auto">
      <Image
        src="/image/login.png"
        alt="Login Image"
        priority
        width="686"
        height="489"
        // className="object-contain"
      />
    </div>

    {/* Хэрвээ нэмэлт зураг байвал доор нээж болно */}
    {/* <div className="relative">
        <Image
          src="/svg/name.svg"
          alt="Name Image"
          priority
          width="376"
          height="111"
        />
      </div> */}
  </section>
</div>

  );
};

export default SignUpPage;
