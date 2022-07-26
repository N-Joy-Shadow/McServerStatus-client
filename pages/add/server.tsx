import { GetStaticProps } from "next";
import AddServer from "../../components/add_server";
export default function server() {
  return (
    <div style={{ height : "100vh" , width :"100vw"}}>
      <AddServer />
    </div>
  );
}
export const getServerSideProps: GetStaticProps = (context) => {
  return {
    props: {},
  };
};
