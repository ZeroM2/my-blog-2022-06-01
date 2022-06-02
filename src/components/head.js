import React from "react";
import { Link } from "gatsby";

function Head() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Link to="/">홈</Link>
      <Link to="/about">about</Link>
      <Link to="/content">content</Link>
    </div>
  );
}

export default Head;
