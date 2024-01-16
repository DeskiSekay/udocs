import DocsContentHeadComponent from "@/components/DocsContentHead";

export interface IDocsContentParams {
  collapse: boolean;
}
function DocsContentComponent({
  params,
  onChange,
}: {
  params: IDocsContentParams;
  onChange: (action: string, state: unknown) => void;
}) {
  const onMenuItemClick = (item: string) => {
    switch (item) {
      case "collapse":
        onChange("collapse", !params.collapse);
        break;
      default:
        break;
    }
  };
  return (
    <div className="docs-content__wrapper docs-page__inner-wrapper">
      <section className="doc-content__head">
        <DocsContentHeadComponent collapse={params.collapse} onMenuItemClick={onMenuItemClick} />
      </section>
      <section className="doc-content__body">
        <main>ababbbb</main>
      </section>
      <section className="doc-content__foot"></section>
    </div>
  );
}

export default DocsContentComponent;
