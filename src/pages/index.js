import { Link } from "gatsby";
import React from "react";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page!!!</title>

      <div style={{ display: "flex", gap: 20 }}>
        <Link to="/">홈</Link>
        <Link to="/about">about</Link>
        <Link to="/content">content</Link>
      </div>
      <h1>Home !!!!</h1>
    </main>
  );
};

export default IndexPage;
