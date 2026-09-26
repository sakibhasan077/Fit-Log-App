import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0f13] px-6 text-white">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-lime-400">
          Error 404
        </p>

        <h1 className="mt-2 text-7xl font-extrabold sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-400">
          The page you are looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black hover:bg-lime-300"
        >
          Go Back Workout 
        </Link>
      </div>
    </main>
  );
};

export default NotFound;