import Layout from "../components/Layout";

// Blogページのtop
// 下の関数で全てのブログを取得、idとタイトルを埋め込んだページを事前に作る
export default function Responsive() {
  return (
    <Layout title="Responsive">
      <div className="flex flex-col lg:relative lg:w-screen">
        <div className="flex justify-center items-center w-full">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
            className="w-full"
            alt="cityLandScape"
          />
        </div>
        <div className="m-6 p-5 lg:h-full lg:m-0 lg:absolute lg:text-gray-700 lg:shadow-lg  backdrop-blur lg:bg-white lg:bg-opacity-70 lg:filter lg:w-1/2 top-0 right-0 bottom-0 left-50">
          <h2 className="text-4xl my-8 lg:text-7xl lg:h-1/5">Welcome</h2>
          <div className="flex justify-center items-center  lg:leading-8">
            <p className="text-xl lg:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
