import LoginForm from "@/components/auth/login/login-form";

import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
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

      <section className="w-1/2 flex flex-col justify-center items-center p-10 bg-base-white h-screen">
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
