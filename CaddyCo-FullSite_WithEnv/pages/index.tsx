import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      <Head>
        <title>Caddy Co.</title>
      </Head>
      <div className="relative h-[60vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          src="/videos/istockphoto-2019929297-640_adpp_is.mp4"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black/50 text-white text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Welcome to Caddy Co.</h1>
          <p className="mt-4 text-xl max-w-2xl">
            Premium golf gear, accessories, and style — where performance meets elegance.
          </p>
          <Link href="/products">
            <span className="mt-6 inline-block bg-white text-green-800 font-semibold py-2 px-6 rounded hover:bg-green-100 cursor-pointer">
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}