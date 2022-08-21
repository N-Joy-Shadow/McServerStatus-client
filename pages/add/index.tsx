import { GetStaticProps,NextPage } from "next";
import AddServer from "../../utils/components/addServer";

 const server : NextPage= ({}) => {
  return (
    <div style={{ height : "100vh" , width :"100vw"}}>
      <AddServer />
    </div>
  );
}
export const getstatiacprops: GetStaticProps = (context) => {
  return {
    props: {},
  };
};
export default server