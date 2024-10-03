import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Page 1 - My Simple App</title>
        <meta name="description" content="This is Page 1 of the simple app." />
      </Head>
      <Navbar />
      <main>
        <div className="w-full h-screen bg-blue-400 flex justify-center items-center text-3xl">
          Welcome to Page 1
        </div>
      </main>
    </>
  );
}
