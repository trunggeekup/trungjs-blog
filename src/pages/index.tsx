import { GetStaticProps } from "next";
import Ztext from 'react-ztext'

import config from "@/lib/config";
import { countPosts, listPostContent } from "@/lib/posts";
import { listTags } from "@/lib/tags";

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
      <div className="container flex items-center justify-center flex-auto px-8">
        <div>
          <h1 className="font-bold">
            Hi, I'm <Ztext
              depth='1rem'
              direction='both'
              event='pointer'
              eventRotation='15deg'
              eventDirection='default'
              fade={false}
              layers={5}
              perspective='700px'
            ><span className="text-primary-600">Trung.js</span></Ztext>
          </h1>
          <span className="text-gray-600">@trung.js</span>
          <h2 className="my-4 text-4xl">Software Engineer</h2>
          <p className="my-2">I am a guy who craves to apply technology to solve people's problems.</p>
          <SocialList className="my-2" />
          <p>
            <a href="https://www.buymeacoffee.com/trungjs" target="_blank">Buy me a coffee</a>
          </p>
        </div>
      </div>
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
