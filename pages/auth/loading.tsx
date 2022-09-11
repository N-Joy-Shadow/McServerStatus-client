/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import MainLayout from "../../utils/layouts/mainLayout";
import { useEffect } from "react";
import { TokenChangeFetch } from "../../utils/components/fetch/auth/tokenFetch";
import { NextPage } from "next";

const index = ({ code }: { code: string }) => {
  useEffect(() => {
    TokenChangeFetch(code).then((x) => {
      console.log(x.data);
    })
  }, []);

  return <MainLayout>hi</MainLayout>;
};

index.getInitialProps = async ({ query } : { query : any }) => {
  const { code } = query;
  return { code };
};

export default index;
