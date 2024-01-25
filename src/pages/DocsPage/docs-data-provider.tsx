import { Message } from "@arco-design/web-react";
import DocsPageLayout from "./docs-page-layout";
import { useI18n } from "@/utils/i18n";

function DocsDataProvider() {
  const list = ["1", "2", "3"];
  const t = useI18n({
    zh: {
      copy: { success: "复制成功，快去和小伙伴分享吧！", error: "复制失败，建议您使用更现代的浏览器" },
    },
  });
  const handleDataAction = (action: string, state: unknown, src?: string) => {
    console.log(action, state, src);
    switch (action) {
      case "click-list-item": {
        if (src === "gallery-list") {
          console.log("click-list-item");
        }
        break;
      }
      case "click-share": {
        if (window.navigator.clipboard) {
          window.navigator.clipboard
            .writeText("this is a share link")
            .then(() => {
              Message.success(t("copy.success"));
            })
            .catch(() => {
              Message.error(t("copy.error"));
            });
        }
        break;
      }
      default:
        break;
    }
  };
  return <DocsPageLayout {...{ data: { list }, action: { handleDataAction } }} />;
}

export default DocsDataProvider;
