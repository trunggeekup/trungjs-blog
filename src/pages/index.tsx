import { GetStaticProps } from "next";
import Ztext from 'react-ztext'

import config from "@/lib/config";
import { countPosts, listPostContent, PostContent } from "@/lib/posts";
import { listTags, TagContent } from "@/lib/tags";

import Layout from "@/components/Layout";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";
import { SocialList } from "@/components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta
        url="https://blog.trungjs.dev"
        title="Trung.js Blog"
        description="I am a guy who craves to apply technology to solve people's problems."
        author="trung.js"
      />
      <OpenGraphMeta url="https://blog.trungjs.dev" title="Trung.js Blog" description="I am a guy who craves to apply technology to solve people's problems." />
      <TwitterCardMeta url="https://blog.trungjs.dev" title="Trung.js Blog" description="I am a guy who craves to apply technology to solve people's problems." />
      <div className="container">
        <div>
          <h1>
            Hi, I'm <Ztext
              depth='1rem'
              direction='both'
              event='pointer'
              eventRotation='15deg'
              eventDirection='default'
              fade={false}
              layers={5}
              perspective='700px'
            ><span className="fancy">Trung.js</span></Ztext>
          </h1>
          <span className="handle">@trung.js</span>
          <h2>Software Engineer</h2>
          <p>I am a guy who craves to apply technology to solve people's problems.</p>
          <SocialList />
          <p>
            <a href="https://www.buymeacoffee.com/trungjs" target="_blank">Buy me a coffee</a>
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 2rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: var(--primary-color);
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
