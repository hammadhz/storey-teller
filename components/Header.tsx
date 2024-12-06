import { BookOpen, FilePen } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="relative p-16 text-center">
      <Link href={"/"}>
        <h1 className="text-6xl text-black">StoryTeller AI</h1>
        <div className="flex justify-center space-x-5 text-3xl lg:text-5xl">
          <h2>Bringing your stories</h2>
          <div className="">
            <div className=" bg-purple-500 -rotate-1">
              <p className=" text-white">To Life!</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="absolute -top-5 right-5 flex space-x-2">
        <Link href={"/"}>
          <FilePen className="size-8 lg:size-10 mx-auto text-purple-500 mt-10 border border-purple-500 p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
        <Link href={"/stories"}>
          <BookOpen className="size-8 lg:size-10 mx-auto text-purple-500 mt-10 border border-purple-500 p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
