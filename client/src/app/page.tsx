import { Metadata } from "next";
import Banner from "./(homepage)/banner";
import Features from './(homepage)/features';

export const metadata: Metadata = {
  title: "J2911 Realty",
  description: "J2911 Realty Website",
};

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
    </>
  );
}
