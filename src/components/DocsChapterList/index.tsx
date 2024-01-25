import { Tooltip } from "@arco-design/web-react";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";
import "./index.css";

interface IDocsChapterListParams {
  params: {
    collapse: boolean;
  };
  data: {
    list: string[];
  };
  action: {
    handleDataAction: (action: string, state: unknown, src?: string) => void;
    handleViewAction: (action: string, state: unknown, src?: string) => void;
  };
}
function DocsChapterListContent({
  params: { collapse },
  data: { list },
  action: { handleViewAction },
}: IDocsChapterListParams) {
  return (
    <div className="docs-chapter-list__wrapper docs-page__inner-wrapper">
      <div className="docs-chapter-list__toolbar">
        <Tooltip content="123" trigger="hover" position="bottom" color="#63635e">
          <div
            className="opt-item opt-item__sd"
            onClick={(e) => {
              e.preventDefault();
              handleViewAction("collapse", !collapse, "chapter-list");
            }}
          >
            {collapse ? <TbArrowBarRight /> : <TbArrowBarLeft />}
          </div>
        </Tooltip>
      </div>
      <div className="docs-chapter-list__list">
        {list.map((item) => {
          return (
            <div className="docs-chapter-list__list-item" key={item}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DocsChapterListContent;
