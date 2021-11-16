import type { NextPage } from "next";
import { Page } from "common/components/Page";

const BLOG: NextPage = () => {
  return (
    <Page className="blog-page">
      <h1 className="blog-page-heading">
        Latest <span>Posts</span>
      </h1>

      <section className="blog-page-latest"></section>
    </Page>
  );
};

export default BLOG;
