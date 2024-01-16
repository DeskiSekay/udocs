import "./index.css";

export interface IDocsGalleryListParams {
  list: string[];
}
function DocsGalleryListComponent({ params }: { params: IDocsGalleryListParams }) {
  return (
    <div className="docs-gallery-list__wrapper docs-page__inner-wrapper">
      {params.list ? (
        params.list.map((item) => {
          return <div className="docs-gallery-list__item">{item}</div>;
        })
      ) : (
        <div>暂无数据</div>
      )}
    </div>
  );
}

export default DocsGalleryListComponent;
