import { getPostData } from "./lib.js";
import DisplayBlogs from "@/components/general/DisplayBlogs.js";
import Articles from "./articles/page.js";

export default async function Home() {
  //Will same array of file names without .mdx to a variable

  let posts = await getPostData();

  const lastTenPosts = posts.slice(-10);

  return (
    <>
      <div>
        <h2>home :)</h2>
        <section id="lastestPosts">
          <DisplayBlogs posts={lastTenPosts}></DisplayBlogs>
        </section>
      </div>
    </>
  );
}
