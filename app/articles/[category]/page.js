import DisplayBlogs from "../../../components/general/DisplayBlogs";
import { getPostData } from "../../lib";

export default async function ArticlesByCatagory({ params }) {
  const { category } = params;
  const postData = await getPostData();

  console.log(postData);

  // Filter posts by specified category
  const posts = postData.filter(
    (post) => post.categories.indexOf(category) !== -1
  );

  console.log(posts);

  return (
    <>
      <h3>{category} articles</h3>
      <DisplayBlogs posts={posts}></DisplayBlogs>
    </>
  );
}
