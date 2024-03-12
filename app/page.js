import Link from "next/link";
import { getPostData } from "./lib.js";
import Blog from "./blog/page.js";

export default async function Home() {
  //Will same array of file names without .mdx to a variable
  const postData = await getPostData();

  return (
    <>
      <div>
        <Blog posts={postData}></Blog>
      </div>
    </>
  );
}
