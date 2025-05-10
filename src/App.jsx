import React, { Suspense, lazy } from "react";
import MeetSection from "./components/MeetSection";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Products = lazy(() => import("./components/Products"));
const TestimonialCard = lazy(() => import("./components/TestimonialCard"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Header />
      <Hero />
      <Products />
      <TestimonialCard />
      <MeetSection />
    </Suspense>
  );
}
