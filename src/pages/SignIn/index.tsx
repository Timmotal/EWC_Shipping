import LoginForm from "../../components/SignInForm";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full relative  overflow-hidden flex flex-col items-start justify-start  pt-9 px-10 md:px-20  gap-[9.487rem] leading-[normal] tracking-[normal] pb-[10rem] ">
      <NavLink to="/">
        <img
          className="w-24 h-8 relative object-cover"
          loading="lazy"
          alt=""
          src="/EastWest _Logo.png"
        />
      </NavLink>

      <div className="absolute flex items-end justify-end bottom-0 right-0  z-[-40]">
        <img
          className=""
          src="BackgroundImg.svg"
          alt="East West Background Image"
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default SignIn;
