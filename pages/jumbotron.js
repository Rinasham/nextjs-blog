import Layout from "../components/Layout";

// Card practice
export default function Jumbotron() {
  return (
    <Layout title="Jumbotron">
      <div
        className="w-screen p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
        style={{
          backgroundImage: `url("https://mdbootstrap.com/img/new/standard/city/041.jpg")`,
          height: "400px",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-white">
              <h2 className="font-semibold text-4xl mb-4">
                Responsive Practice
              </h2>
              <h4 className="font-semibold text-xl mb-6">Subheading</h4>
              <a
                className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
