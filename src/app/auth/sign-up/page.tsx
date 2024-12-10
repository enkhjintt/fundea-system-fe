import SignUpForm from "@/components/auth/sign-up/sign-up";

import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <section className="w-1/2 h-screen flex flex-col justify-center items-center px-10 bg-base-white ">
        <SignUpForm />
      </section>
      <section className="w-1/2 h-screen relative flex justify-center items-center bg-gradient-to-r to-secondary-normal from-primary-normal">
        <div className="relative ">
          <Image
            src="/image/login.png"
            alt="Login Image"
            priority
            width="686"
            height="489"
            // className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
