import { Tooltip } from "@arco-design/web-react";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";
import "./index.css";

export interface IDocsChapterListParams {
  collapse: boolean;
}
function DocsChapterListContent({
  params,
  onChange,
}: {
  params: IDocsChapterListParams;
  onChange: (action: string, state: unknown) => void;
}) {
  return (
    <div className="docs-chapter-list__wrapper docs-page__inner-wrapper">
      <div className="docs-chapter-list__toolbar">
        <Tooltip content="123" trigger="hover" position="bottom" color="#63635e">
          <div
            className="opt-item opt-item__sd"
            onClick={(e) => {
              e.preventDefault();
              onChange("collapse", !params.collapse);
            }}
          >
            {params.collapse ? <TbArrowBarRight /> : <TbArrowBarLeft />}
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default DocsChapterListContent;
