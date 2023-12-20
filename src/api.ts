import fs from "fs";
import matter from "gray-matter";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "src/posts");

export const getSlugs = (): string[] => {
  const paths = fs.readdirSync(POSTS_PATH);
  return paths.map((fileName) => {
    const [slug] = fileName.split(".");
    return slug;
  });
};

export const getAllPosts = (): Post[] => {
  const posts = getSlugs().map((slug) => getPostFromSlug(slug));

  // Log for debugging dates before sorting
  console.log("Dates before sorting:", posts.map((post) => post.meta.date));

  // Sort posts by date in descending order (from most recent to oldest)
  posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

  // Log for debugging dates after sorting
  console.log("Dates after sorting:", posts.map((post) => post.meta.date));

  return posts;
};

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);

  try {
    const source = fs.readFileSync(postPath, "utf-8");
    const { content, data } = matter(source);

    // Parse the date and handle errors
    let date: Date;
    if (data.date) {
      const parsedDate = Date.parse(data.date);
      if (!isNaN(parsedDate)) {
        date = new Date(parsedDate);
      } else {
        console.error(`Invalid date format for slug '${slug}': '${data.date}'`);
        date = new Date(); // Fallback to default date
      }
    } else {
      date = new Date();
    }

    return {
      content,
      meta: {
        slug,
        excerpt: data.excerpt || "",
        title: data.title || slug,
        tags: (data.tags || []).sort(),
        date: date.toISOString(), // Format the date as needed
      },
    };
  } catch (error) {
    console.error(`Error reading or parsing file for slug '${slug}': ${error.message}`);
    return {
      content: "", // or handle error content as needed
      meta: {
        slug,
        excerpt: "",
        title: slug,
        tags: [],
        date: new Date().toISOString(),
      },
    };
  }
};

interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
}
