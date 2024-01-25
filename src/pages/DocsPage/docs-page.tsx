import DocsDataProvider from "./docs-data-provider";
import "./docs-page.css";

function DocsPage() {
  return (
    <div className="docs-page__wrapper w-full h-full">
      <DocsDataProvider />
    </div>
  );
}

export default DocsPage;
