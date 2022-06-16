import { NextPage } from "next";
import Head from "next/head";
import Heading from "../components/Wishboard/Heading";
import Wish from "../components/Wishboard/Wish";

const Wishboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nexxel | Wishboard</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Wishes for Rachey!" />
      </Head>
      <div className="relative flex flex-col min-h-screen background">
        <div className="flex items-center justify-center">
          <Heading />
        </div>
        <div className="py-8" />

        <div className="items-start">
          <Wish
            wish="nexxel da best"
            sender="yash"
          />
          <Wish
            wish="nexxel cool af"
            sender="yash (ofc)"
          />
          <Wish
            wish="happy birthday nexxel"
            sender="yash (ofc)"
          />
          <Wish
            wish="happy birthday nexxel congrats for being another year closer to ur death!"
            sender="yash (ofc)"
          />
          <Wish
            wish="Love u nexxel"
            sender="yash (ofc)"
          />
        </div>

        <div className="pb-6" />
      </div>
    </>
  );
};

export default Wishboard;
