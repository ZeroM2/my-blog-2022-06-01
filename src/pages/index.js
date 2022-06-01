import { Link } from "gatsby";
import React from "react";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page!!!</title>

      <div style={{ display: "flex", gap: 20 }}>
        <Link href="/">홈</Link>
        <Link href="/about">about</Link>
        <Link href="/content">content</Link>
      </div>
      <h1>Home !!!!</h1>
    </main>
  );
};

export default IndexPage;
