import Head from "next/head";
import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>YouTube comments App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 h-full min-h-screen pb-10">{children}</main>
    </>
  );
};

export default Layout;
