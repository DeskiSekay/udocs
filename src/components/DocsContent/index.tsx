import DocsContentHeadComponent from "@/components/DocsContentHead";
import { ICommonComponentProps } from "@/types/system";
import DocsContentItemComponent from "../DocsContentItem";

function DocsContentComponent({
  params: { collapse },
  data: { list },
  action: { handleViewAction, handleDataAction },
}: ICommonComponentProps<{ collapse: boolean }, { list: string[] }>) {
  return (
    <div className="docs-content__wrapper docs-page__inner-wrapper">
      <section className="doc-content__head">
        <DocsContentHeadComponent
          {...{ params: { collapse }, data: { list }, action: { handleDataAction, handleViewAction } }}
        />
      </section>
      <section className="doc-content__body">
        <main>
          <DocsContentItemComponent />
        </main>
      </section>
      <section className="doc-content__foot"></section>
    </div>
  );
}

export default DocsContentComponent;
