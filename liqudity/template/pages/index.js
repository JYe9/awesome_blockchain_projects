import React from "react";

//INTERNAL IMPORT
import {
  Action,
  Faq,
  Features,
  Footer,
  Generator,
  Header,
  Hero,
  Price,
  ScrollUp,
  Technolog,
} from "../components/index";

const index = () => {
  return (
    <div class="bg-slate-900">
      <Header />
      <Hero />
      <Features />
      <Technolog />
      <Generator />
      <Price />
      <Faq />
      <Action />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default index;
