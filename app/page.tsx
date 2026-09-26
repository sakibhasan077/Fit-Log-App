import Banner from "@/components/banner/Banner";
import Library from "@/components/library/Library";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Suspense fallback={<Loading></Loading>}>
        <Library></Library>
      </Suspense>
    </>
  );
}
