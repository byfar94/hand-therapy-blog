import Link from "next/link";

export default function Blog({ posts }) {
  //looping through all post title names (slugs) and maping through them creating an element below for each one, the element is a link that will link to the slug within the posts file
  return (
    <>
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={`${post.slug}link`}>
          <div>
            <h2 key={`${post.slug}title`}>{post.title}</h2>
            <p>{post.title}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
