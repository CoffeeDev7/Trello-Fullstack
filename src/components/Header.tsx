import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import {authOptions} from "@/lib/authOptions";
import {getServerSession} from "next-auth";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header style={{ backgroundColor: "white" }} className=" p-4 px-8">
      <div className="flex justify-between items-center">
      <Link 
  href="/" 
  className="logo text-3xl font-bold text-blue-600 italic tracking-wide font-[cursive]"
>
  Trello Clone
</Link>

        <div>
          {session && (
            <>
              Hello, {session?.user?.name}
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              Not logged in
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}