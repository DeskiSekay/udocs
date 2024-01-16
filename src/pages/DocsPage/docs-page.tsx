import { useState } from "react";
import DocsContentComponent from "../../components/DocsContent/index.tsx";
import { IDocsContentParams } from "../../components/DocsContent/index.tsx";
import DocsChapterListContent, { IDocsChapterListParams } from "@/components/DocsChapterList/index.tsx";
import DocsGalleryListComponent, { IDocsGalleryListParams } from "@/components/DocsGalleryList/index.tsx";
import "./docs-page.css";

function DocsPage() {
  const [pageMode, setPageMode] = useState<string>("browse");
  const [docsGalleryParams, setDocsGalleryParams] = useState<IDocsGalleryListParams>({
    list: ["1", "2", "3"],
  });
  const [docsListParams, setDocsListParams] = useState<IDocsChapterListParams>({
    collapse: false,
  });
  const [docsContentParams, setDocsContentParams] = useState<IDocsContentParams>({
    collapse: false,
  });
  const handleDocsListChange = (action: string, state: unknown) => {
    switch (action) {
      case "collapse": {
        const newState = state as boolean;
        setPageMode(() => (newState ? "read" : "browse"));
        setDocsListParams({
          ...docsListParams,
          collapse: newState,
        });
        break;
      }
      default:
        break;
    }
  };
  const handleDocsContentChange = (action: string, state: unknown) => {
    switch (action) {
      case "collapse": {
        const newState = state as boolean;
        setPageMode(() => (newState ? "collapse" : "read"));
        setDocsListParams({
          ...docsListParams,
          collapse: true,
        });
        setDocsContentParams({
          ...docsContentParams,
          collapse: newState,
        });
        break;
      }
    }
  };
  return (
    <div className="docs-page__wrapper w-full h-full">
      <div className={`docs-page docs-page__${pageMode} w-full h-full`}>
        <section className="docs-page__col">
          <DocsGalleryListComponent params={docsGalleryParams} />
        </section>
        <section className="docs-page__col">
          <DocsChapterListContent params={docsListParams} onChange={handleDocsListChange} />
        </section>
        <section className="docs-page__col">
          <DocsContentComponent params={docsContentParams} onChange={handleDocsContentChange} />
        </section>
      </div>
    </div>
  );
}

export default DocsPage;
