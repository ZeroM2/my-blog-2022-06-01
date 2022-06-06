import { Link } from "gatsby";
import React from "react";

function layout({ children }) {
  return (
    <>
      <main>
        <div style={{ display: "flex", gap: 20 }}>
          <Link to="/">홈</Link>
          <Link to="/about">about</Link>
          <Link to="/content">content</Link>
        </div>

        {children}

        <div>Copyright all right</div>
      </main>
    </>
  );
}

export default layout;
