import DocsContentHeadComponent from "@/components/DocsContentHead";
import { Tabs, Typography } from "@arco-design/web-react";
import { useContext, useState } from "react";
import "./index.css";
import TabCustomAddComponent from "./components/tab-custom-add";
import TabCustomDeleteComponent from "./components/tab-custom-delete";
import { ContextShowJoinContributer } from "@/context/user-context";
export interface IDocsContentParams {
  collapse: boolean;
}

const TabPane = Tabs.TabPane;
let count = 5;
const initTabs = [...new Array(count)].map((x, i) => ({
  title: `Tab ${i + 1}`,
  key: `key${i + 1}`,
  content: `${i + 1}`,
}));
function DocsContentComponent({
  params,
  onChange,
}: {
  params: IDocsContentParams;
  onChange: (action: string, state: unknown) => void;
}) {
  const context = useContext(ContextShowJoinContributer);
  const onMenuItemClick = (item: string) => {
    switch (item) {
      case "collapse":
        onChange("collapse", !params.collapse);
        break;
      default:
        break;
    }
  };
  const [tabs, setTabs] = useState(initTabs);
  const [activeTab, setActiveTab] = useState("key2");

  const handleAddTab = () => {
    context(true);return;
    const newTab = {
      title: `New Tab${++count}`,
      key: `new key${count}`,
      content: `${count}`,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.key);
  };

  const handleDeleteTab = (key: string) => {
    const index = tabs.findIndex((x) => x.key === key);
    const newTabs = tabs.slice(0, index).concat(tabs.slice(index + 1));

    if (key === activeTab && index > -1 && newTabs.length) {
      setActiveTab(newTabs[index] ? newTabs[index].key : newTabs[index - 1].key);
    }

    if (index > -1) {
      setTabs(newTabs);
    }
  };

  return (
    <div className="docs-content__wrapper docs-page__inner-wrapper">
      <section className="doc-content__head">
        <DocsContentHeadComponent collapse={params.collapse} onMenuItemClick={onMenuItemClick} />
      </section>
      <section className="doc-content__body">
        <Tabs
          editable
          defaultActiveTab="key1"
          size="mini"
          onAddTab={handleAddTab}
          onDeleteTab={handleDeleteTab}
          addButton={<TabCustomAddComponent />}
          deleteButton={<TabCustomDeleteComponent />}
          inkBarSize={{height: '0'}}
          animation
          justify
        >
          {tabs.map((x, i) => (
            <TabPane destroyOnHide key={x.key} title={x.title}>
              <main> 
                <section className="doc-content__text">
                  <div style={{height: '200vh'}}></div>
                </section>
                <section className="doc-content__foot">ababbbb</section>
              </main>
            </TabPane>
          ))}
        </Tabs>
      </section>
    </div>
  );
}

export default DocsContentComponent;
