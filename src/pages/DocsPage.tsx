import { useState } from "react";
import DocsContentComponent from "../components/DocsContent/index.tsx";

function DocsPage() {
  const [pageMode, setPageMode] = useState(0);
  const handleClickCol = (index: number) => {
    setPageMode(index === 2 ? 1 : 0); // 切换页面模式
  };
  return (
    <div className="docs-page__wrapper w-full h-full">
      <div
        className={`docs-page ${
          pageMode === 0 ? "docs-page__browse" : "docs-page__read"
        } w-full h-full`}
      >
        <div className="docs-page__col" onClick={() => handleClickCol(0)}>
          1
        </div>
        <div className="docs-page__col" onClick={() => handleClickCol(1)}>
          2
        </div>
        <div className="docs-page__col" onClick={() => handleClickCol(2)}>
          <DocsContentComponent />
        </div>
      </div>
    </div>
  );
}

export default DocsPage;
