function DocsContentItemComponent() {
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
