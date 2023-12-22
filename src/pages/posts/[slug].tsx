import { BackButton } from "@/components/backButton";
import "highlight.js/styles/atom-one-dark.css";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import React from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { PostMeta, getPostFromSlug, getSlugs } from "../../api";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import Head from "../../infra/head";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

const PostPage = ({ post }: { post: MDXPost }) => {
  return (
    <React.Fragment>
      <Head title={post.meta.title} />
      <React.Fragment>
        <Menu />
        <div className="containerMDX containerPadding postMDX">
        <BackButton href="/">Voltar</BackButton>
          <MDXRemote {...post.source} components={{ Image }} />
        </div>
        <Footer />
      </React.Fragment>
    </React.Fragment>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
