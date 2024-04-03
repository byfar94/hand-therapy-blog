import fs, { Dirent } from "fs";
import path from "path";
import { readdir } from "node:fs/promises";

// get post Data
function getPostSlugs() {
  //current direcotry joined with app/posts/ to get the beginning of the path to posts files
  const folder = path.join(process.cwd(), "app/posts/");
  //get the folder name of each blogpost = slug
  const slugs = fs.readdirSync(folder);
  console.log(slugs);
  return slugs;
}

async function getPostData() {
  //retireves slugs from post routes async
  const postsDirectory = path.join(process.cwd(), "app/posts");
  const dirents = await readdir(postsDirectory, { withFileTypes: true });
  const slugs = dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  //takes slug name and creates dynamic route
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metaData } = await import(`./posts/${slug}/page.mdx`);
      return { slug: slug, ...metaData };
    })
  );
  //sort posts newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
  return posts;
}

export { getPostData };
