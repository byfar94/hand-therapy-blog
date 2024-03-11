import fs from "fs";
import path from "path";
import matter from "gray-matter";

// get post Data

const getPostData = () => {
  // Assuming your posts directory is directly under the project root
  const folder = path.join(process.cwd(), "app/posts/");

  try {
    const files = fs.readdirSync(folder);
    const markdownPosts = files.map((slug) => `${slug}/page.mdx`);

    const posts = markdownPosts.map((mdx) => {
      const fullPath = path.join(folder, mdx); // Construct the full path
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        slug: mdx.replace("/page.mdx", ""),
        title: matterResult.data.title,
        snippet: matterResult.data.snippet,
        date: matterResult.data.date,
      };
    });
    console.log(posts);
    return posts; // Return the array of post metadata
  } catch (error) {
    console.error("Error reading post slugs:", error);
    return []; // Return an empty array in case of error
  }
};

function getMetaData() {
  const fileContents = fs.readFileSync(`posts/${file}`);
}

export { getPostData };
