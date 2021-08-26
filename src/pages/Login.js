import { Footer, Header, LoginForm } from "parts";
import React, { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <section className="container mx-auto pt-10">
        <Header onLight />
      </section>
      <section className="container mx-auto pt-10 px-4">
        <LoginForm />
      </section>
      <section className="mt-24 py-12 bg-indigo-1000">
        <Footer />
      </section>
    </>
  );
}
