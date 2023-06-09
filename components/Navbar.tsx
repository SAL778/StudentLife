
import { useSession, signOut, signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
 import { authOptions } from "../pages/api/auth/[...nextauth]";
 import { GetServerSideProps } from "next";
import Image from "next/image";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  const handleSignIn = () => {
    signIn("google");
  };

  return (
    <div className="flex items-center justify-between bg-black h-20 pt-2">
      <div className="flex items-center gap-2 px-20">
        <div>
          <a href="/"><Image src={logo} alt="logo" width={35} height={35} /></a>
        </div>
        <a href="/"><div className="text-white font-bold text-[24px]">StudentLife</div></a>
      </div>
      {!session ? (
        <div className="pr-20">
          <button
            className="bg-blue-600 text-white pl-8 pr-8 py-1.5 rounded-md "
            type="button"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      ) : (
        <div onClick={handleSignOut}>Logout</div>
      )}
    </div>
  );
};

export default Navbar;


 

