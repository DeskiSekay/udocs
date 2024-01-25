import { useContext, useState } from "react";
import DocsContentComponent from "../../components/DocsContent/index.tsx";
import DocsChapterListContent from "@/components/DocsChapterList/index.tsx";
import DocsGalleryListComponent from "@/components/DocsGalleryList/index.tsx";
import { DeviceTypeContext } from "@/contexts/system-context.ts";

interface IDocsPageLayoutProps {
  data: {
    list: string[];
  };
  action: {
    handleDataAction: (action: string, state: unknown, src?: string) => void;
  };
}
function DocsPageLayout({ data: { list }, action: { handleDataAction } }: IDocsPageLayoutProps) {
  const deviceType = useContext(DeviceTypeContext);
  const [pageMode, setPageMode] = useState<string>("browse");
  const [galleryListCollapse, setGalleryListCollapse] = useState<boolean>(false);
  const [chapterListCollapse, setChapterListCollapse] = useState<boolean>(false);

  const handleSetPageMode = (col1: boolean, col2: boolean) => {
    if (!col1 && !col2) setPageMode("browse");
    else if (col1 && !col2) setPageMode("read");
    else setPageMode("collapse");
  };

  const handleViewAction = (action: string, state: unknown, src?: string) => {
    console.log(action, state, src);
    switch (action) {
      case "collapse": {
        if (src === "chapter-list") {
          setGalleryListCollapse((c) => {
            handleSetPageMode(!c, chapterListCollapse);
            return !c;
          });
        } else if (src === "content-head") {
          setChapterListCollapse((c) => {
            handleSetPageMode(galleryListCollapse, !c);
            return !c;
          });
        }
        break;
      }
      default:
        break;
    }
  };

  console.log(deviceType);

  return (
    <div className={`docs-page docs-page__${pageMode} w-full h-full`}>
      <section className="docs-page__col">
        <DocsGalleryListComponent {...{ data: { list }, action: { handleDataAction } }} />
      </section>
      <section className="docs-page__col">
        <DocsChapterListContent
          {...{
            params: { collapse: galleryListCollapse },
            data: { list },
            action: { handleDataAction, handleViewAction },
          }}
        />
      </section>
      <section className="docs-page__col">
        <DocsContentComponent
          {...{
            params: { collapse: chapterListCollapse },
            data: { list },
            action: { handleDataAction, handleViewAction },
          }}
        />
      </section>
    </div>
  );
}

export default DocsPageLayout;
