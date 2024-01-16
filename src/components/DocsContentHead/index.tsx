import { Tooltip } from "@arco-design/web-react";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";
import "./index.css";

function DocsContentHeadComponent({
  collapse,
  onMenuItemClick,
}: {
  collapse: boolean;
  onMenuItemClick: (item: string) => void;
}) {
  return (
    <div className="docs-content-head__wrapper">
      <div className="docs-content-head">
        <div className="docs-content-head__group docs-content-head__first">
          <div className="doc-content-head__opts flex a-c gap-1">
            <Tooltip content="123" trigger="hover" position="bottom" color="#63635e">
              <div
                className="doc-content-head__opt opt-item opt-item__sd"
                onClick={(e) => {
                  e.stopPropagation();
                  onMenuItemClick("collapse");
                }}
              >
                {collapse ? <TbArrowBarRight /> : <TbArrowBarLeft />}
              </div>
            </Tooltip>
            <div className="doc-content-head__opt opt-item opt-item__sd"></div>
            <div className="doc-content-head__opt opt-item opt-item__sd"></div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default DocsContentHeadComponent;
