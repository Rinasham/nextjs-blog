import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

// Blogページのtop
// 下の関数で全てのブログを取得、idとタイトルを埋め込んだページを事前に作る
export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="mt-12">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
      </ul>
    </Layout>
  );
}

// ビルド時にサーバー側で一度だけ行われる処理
export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
