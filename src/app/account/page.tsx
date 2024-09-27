import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(options);
  console.log(session);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  return <div>{session?.user?.name}</div>;
};

export default page;
