import Head from "next/head";
import Navbar from "../components/Navbar";

function Page2() {
  return (
    <>
      <Head>
        <title>Page 2 - My Simple App</title>
        <meta name="description" content="This is Page 2 of the simple app." />
      </Head>
      <Navbar />
      <main>
        <div className="w-full h-screen bg-green-400 flex justify-center items-center text-3xl">
          Welcome to Page 2
        </div>
      </main>
    </>
  );
}

export default Page2;
