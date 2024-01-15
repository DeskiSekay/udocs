import { useState } from "react";
import DocsContentComponent from "../components/DocsContent.tsx";

function DocsPage() {
	const [pageMode, setPageMode] = useState(0);
    const handleClickCol = (index: number) => {
      setPageMode(index === 2 ? 1 : 0); // 切换页面模式
    }
	return (
		<div className="docs-page-wrapper w-full h-full">
			<div className={`docs-page ${pageMode === 0 ? "docs-page-browse" : "docs-page-read"} w-full h-full`}>
				<div className="docs-page-col" onClick={()=>handleClickCol(0)}>1</div>
				<div className="docs-page-col" onClick={()=>handleClickCol(1)}>2</div>
				<div className="docs-page-col" onClick={()=>handleClickCol(2)}>
                    <DocsContentComponent />
                </div>
			</div>
		</div>
	);
}

export default DocsPage;
