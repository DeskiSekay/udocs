import { TbMessage } from "react-icons/tb";
import { useI18n } from "@/utils/i18n";
import { Tooltip } from "@arco-design/web-react";
import { ICommonComponentProps } from "@/types/system";

function DocsContentItemLangComponent({
  params: { docsContentActiveItemId },
  data: { id, index, content, comments },
  action: { handleViewAction, handleDataAction },
}: ICommonComponentProps<
  { docsContentActiveItemId: string },
  { id: string; index: number; content: string; comments: unknown }
>) {
  const t = useI18n({
    zh: {
      tooltip: {
        content: "评论",
      },
    },
  });
  return (
    <div className="docs-content-item__lang">
      <div className="docs-content-item__content">
        <div className="docs-content-item__content-text">内容</div>
      </div>
      <div className="docs-content-item__opts">
        <div className="docs-content-item__opt-items flex gap-1">
          <Tooltip content={t("tooltip.content")} trigger="hover" position="bottom" color="#63635e">
            <div className="opt-item opt-item__sd">
              <TbMessage />
            </div>
          </Tooltip>
          <div className="opt-item opt-item__sd">2</div>
          <div className="opt-item opt-item__sd">3</div>
        </div>
        <div className="docs-content-item__opt-items">删除</div>
      </div>
      <div className="docs-content-item__extend">{comments as string}</div>
    </div>
  );
}
export default DocsContentItemLangComponent;
