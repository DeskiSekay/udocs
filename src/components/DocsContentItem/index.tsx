import { ICommonComponentProps } from "@/types/system";
import DocsContentItemLangComponent from "../DocsContentItemLang";
import "./index.css";

function DocsContentItemComponent({
  params: { docsContentActiveItemId },
  data: { id, index, content, comments },
  action: { handleViewAction, handleDataAction },
}: ICommonComponentProps<
  { docsContentActiveItemId: string },
  { id: string; index: number; content: string; comments: unknown }
>) {
  return (
    <div
      className="docs-content-item__wrapper"
      onClick={() => handleViewAction("select-content-item", id, "docs-content-item")}
    >
      <div className="docs-content-item__info">publish on 2024-01-20 23:27, {index}</div>
      <div className="docs-content-item__coupe">
        <DocsContentItemLangComponent />
        <DocsContentItemLangComponent />
      </div>
    </div>
  );
}

export default DocsContentItemComponent;
