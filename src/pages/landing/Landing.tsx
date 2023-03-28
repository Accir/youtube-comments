import React, { useState } from "react";
import { NextPage } from "next";
import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";
import Link from "next/link";

const Landing: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="container pt-5 max-w-xl">
      <h1 className="font-bold text-center text-xl pb-9">YouTube video comment checker</h1>
      <form>
        <InputField
          label="Provide one or more YouTube video ID's seperated by a comma"
          type="text"
          value={value}
          onChange={setValue}
        />
        <Link href={{ pathname: "/comments", query: { id: value } }}>
          <Button isSubmit={true} label="Submit" />
        </Link>
      </form>
    </div>
  );
};

export default Landing;
