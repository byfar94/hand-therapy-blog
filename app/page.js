import Link from "next/link";
import { getPostData } from "./lib.js";

export default function Home() {
  //Will same array of file names without .mdx to a variable
  const postData = getPostData();

  //looping through all post title names (slugs) and maping through them creating an element below for each one, the element is a link that will link to the slug within the posts file
  const postPreview = postData.map((post) => (
    <Link href={`/posts/${post.slug}`} key={`${post.title}link`}>
      <div>
        <h2 key={`${post.title}title`}>{post.title}</h2>
        <p>{post.snippet}</p>
      </div>
    </Link>
  ));
  return (
    <>
      <div>{postPreview}</div>
    </>
  );
}
