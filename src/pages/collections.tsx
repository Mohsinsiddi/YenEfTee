import type { NextPage } from "next";
import Head from "next/head";
import { CollectionsView } from "../views/collections/index";

const Collections: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <CollectionsView />
    </div>
  );
};

export default Collections;
