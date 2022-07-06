const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// getStaticPropsでブログ全ページを取ってくる関数 for ブログトップページ
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = res.json();
  return posts;
}

// ========================　ブログ詳細用　==============================

// postのid一覧を取得する関数
// getStaticPaths => getStaticPropsで各ページの詳細を事前に取得しておく
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// getStaticPropsでそれぞれのページの中身を取ってくる関数
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return post;
}
