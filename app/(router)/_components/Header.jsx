"use client";
import React from "react";
import { Search, BellDot } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

const Header = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="p-4 bg-white flex justify-between">
      <div className="flex gap-2 border rounded-md p-2">
        <Search className="h-5 w-5" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500" />
        {isLoaded && user ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
