import React, { Suspense, lazy } from "react";

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
    </Suspense>
  );
}
