import { Tooltip } from "@arco-design/web-react";
import {
  TbArrowBarLeft,
  TbArrowBarRight,
  TbShare2,
  TbInputSearch,
  TbSettings,
  TbUserSquareRounded,
} from "react-icons/tb";
import "./index.css";
import { ICommonComponentProps } from "@/types/system";
import { useI18n } from "@/utils/i18n";

function DocsContentHeadComponent({
  params: { collapse },
  data: { list },
  action: { handleViewAction, handleDataAction },
}: ICommonComponentProps<{ collapse: boolean }, { list: string[] }>) {
  const t = useI18n({
    en: {
      title: "hello world",
      subtitle: "this is a subtitle",
    },
    zh: {
      title: "你好世界",
      subtitle: "这是一个副标题",
      tooltip: {
        collapse: "折叠",
        share: "点击复制分享链接",
      },
    },
  });

  return (
    <div className="docs-content-head__wrapper">
      <div className="docs-content-head flex-sb">
        <div className="docs-content-head__group docs-content-head__first">
          <div className="doc-content-head__opts flex gap-1">
            <Tooltip content={t("global.collapse")} trigger="hover" position="bottom" color="#63635e">
              <div
                className="doc-content-head__opt opt-item opt-item__sd"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewAction("collapse", !collapse, "content-head");
                }}
              >
                {collapse ? <TbArrowBarRight /> : <TbArrowBarLeft />}
              </div>
            </Tooltip>
            <Tooltip content={t("tooltip.share")} trigger="hover" position="bottom" color="#63635e">
              <div
                className="doc-content-head__opt opt-item opt-item__sd"
                onClick={() => {
                  handleDataAction("click-share", null, "content-head");
                }}
              >
                <TbShare2 />
              </div>
            </Tooltip>
            <Tooltip content={t("global.search")} trigger="hover" position="bottom" color="#63635e">
              <div className="doc-content-head__opt opt-item opt-item__sd">
                <TbInputSearch />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="docs-content-head__group docs-content-head__second">{list}</div>
        <div className="docs-content-head__group docs-content-head__third">
          <div className="doc-content-head__opts flex gap-1">
            <Tooltip content={t("global.settings")} trigger="hover" position="bottom" color="#63635e">
              <div className="doc-content-head__opt opt-item opt-item__sd">
                <TbSettings />
              </div>
            </Tooltip>
            <Tooltip content={t("global.login")} trigger="hover" position="bottom" color="#63635e">
              <div className="doc-content-head__opt opt-item opt-item__sd">
                <TbUserSquareRounded />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocsContentHeadComponent;
