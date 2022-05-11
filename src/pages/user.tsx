import type { NextPage } from "next";
import Head from "next/head";
import { UsersView } from "../views/users/index";

const Users: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <UsersView />
    </div>
  );
};

export default Users;
