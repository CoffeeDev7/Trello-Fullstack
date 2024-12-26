'use client';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

export default function LoginView() {
  return (
    <div className="w-full pt-8 text-center">
      <button
        onClick={() => signIn('google')}
        className="bg-[#0066FF] text-white font-medium py-2 px-6 ml-2 rounded-md shadow-[0px_6px_16px_#42a5f5] hover:shadow-[0px_8px_20px_#42a5f5] transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#42a5f5] focus:ring-offset-2"
      >
        Login 
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="ml-2" />
      </button>
    </div>
  );
}
