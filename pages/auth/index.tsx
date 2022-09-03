/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import MainLayout from "../../utils/layouts/mainLayout";
import { useEffect } from "react";
import { TokenChangeFetch } from "../../utils/components/fetch/auth/tokenFetch";

export default function index() {
  const router = useRouter();
  const { code } = router.query;
  useEffect(() => {
    

    TokenChangeFetch(code).then((x) => {
        console.log(x.data);
      })
    },[])

  return <MainLayout>hi {code}</MainLayout>;
}
