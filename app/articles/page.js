import DisplayBlogs from "../../components/general/DisplayBlogs.js";
import { getPostData } from "../lib.js";

export default async function Articles() {
  const postData = await getPostData();
  return (
    <>
      <DisplayBlogs posts={postData}></DisplayBlogs>
    </>
  );
}
