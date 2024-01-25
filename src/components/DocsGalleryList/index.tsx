import { TDeviceType } from "@/types/system";
import "./index.css";

export interface IDocsGalleryListParams {
  params?: { deviceType: TDeviceType };
  data: {
    list: string[];
  };
  action: {
    handleDataAction: (action: string, state: unknown, src?: string) => void;
  };
}
function DocsGalleryListComponent({ data: { list }, action: { handleDataAction } }: IDocsGalleryListParams) {
  return (
    <div className="docs-gallery-list__wrapper docs-page__inner-wrapper">
      {list ? (
        list.map((item) => {
          return (
            <div
              className="docs-gallery-list__item"
              key={item}
              onClick={() => handleDataAction("click-list-item", item, "gallery-list")}
            >
              {item}
            </div>
          );
        })
      ) : (
        <div>暂无数据</div>
      )}
    </div>
  );
}

export default DocsGalleryListComponent;
