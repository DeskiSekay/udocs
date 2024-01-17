import DocsContentHeadComponent from "@/components/DocsContentHead";
import { Tabs, Typography } from "@arco-design/web-react";
import { useContext, useState } from "react";
import "./index.css";
import TabCustomAddComponent from "./components/tab-custom-add";
import TabCustomDeleteComponent from "./components/tab-custom-delete";
import { ContextShowJoinContributer } from "@/context/user-context";
import DocsContentItemComponent from "../DocsContentItem";
import { IDocsContentNode } from "@/types/docs-type";
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
  const data:IDocsContentNode[] = [
    {
      type: "h1",
      text: "Install and Deploy MinIO",
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "MinIO is a software-defined high-performance distributed object storage server. You can run MinIO on consumer or enterprise-grade hardware and a variety of operating systems and architectures.",
        },
      ],
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "MinIO supports three deployment topologies:",
        },
      ],
    },
    {
      type: "h2",
      text: 'Single-Node Single-Drive (SNSD or "Standalone")',
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "A single MinIO server with a single storage volume or folder. SNSD deployment provides failover protections. Drive-level reliability and failover depend on the underlying storage volume.",
        },
      ],
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "SNSD deployments are best suited for evaluation and initial development of applications using MinIO for object storage.",
        },
      ],
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "SNSD deployments implement a zero-parity erasure coding backend and include support for the following erasure-coding dependent features:",
        },
      ],
    },
    {
      type: "link",
      text: "Versioning",
      attr: {
        href: "https://chat.openai.com/c/113c612f-a8d0-4a67-a501-ac4455ef41fe#",
      },
    },
    {
      type: "link",
      text: "Object Locking / Retention",
      attr: {
        href: "https://chat.openai.com/c/113c612f-a8d0-4a67-a501-ac4455ef41fe#",
      },
    },
    {
      type: "h2",
      text: 'Single-Node Multi-Drive (SNMD or "Standalone Multi-Drive")',
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "A single MinIO server with four or more storage volumes. SNMD deployments provide drive-level reliability and failover only.",
        },
      ],
    },
    {
      type: "h2",
      text: 'Multi-Node Multi-Drive (MNMD or "Distributed")',
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "Multiple MinIO servers with at least four drives across all servers. The distributed MNMD topology supports production-grade object storage with drive and node-level availability and resiliency.",
        },
      ],
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "This documentation provides instructions for SNSD and SNMD for supporting local development and evaluation of MinIO on a single host machine",
        },
        {
          type: "bold",
          text: "only",
        },
        {
          type: "text",
          text: ". For MNMD deployments, use the MinIO Kubernetes Operator to deploy and manage MinIO tenants in a containerized and orchestrated environment.",
        },
      ],
    },
    {
      type: "h2",
      text: "Platform Support",
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "MinIO provides container images at the following repositories:",
        },
      ],
    },
    {
      type: "link",
      text: "https://hub.docker.com/r/minio/minio",
      attr: {
        href: "https://hub.docker.com/r/minio/minio",
      },
    },
    {
      type: "link",
      text: "https://quay.io/repository/minio/minio?tab=info",
      attr: {
        href: "https://quay.io/repository/minio/minio?tab=info",
      },
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "Changed in version RELEASE.2022-12-02T19-19-22Z: These images include the ",
        },
        {
          type: "link",
          text: "MinIO Client",
          attr: {
            href: "https://min.io/docs/minio/linux/reference/minio-mc.html#minio-client",
          },
        },
        {
          type: "text",
          text: " command line tool built in for container-level debugging. However, to regularly interact with a container MinIO install, ",
        },
        {
          type: "link",
          text: "install the MinIO Client",
          attr: {
            href: "https://min.io/docs/minio/linux/reference/minio-mc.html#mc-install",
          },
        },
        {
          type: "text",
          text: " on your computer and define an ",
        },
        {
          type: "link",
          text: "alias",
          attr: {
            href: "https://min.io/docs/minio/linux/reference/minio-mc/mc-alias-set.html#command-mc.alias.set",
          },
        },
        {
          type: "text",
          text: " to the container instead.",
        },
      ],
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "Use of MinIO images from any other repository, host, or organization is at your own risk.",
        },
      ],
    },
    {
      type: "paragraph",
      subs: [
        {
          type: "text",
          text: "The ",
        },
        {
          type: "link",
          text: "Single-Node Single-Drive",
          attr: {
            href: "https://chat.openai.com/c/113c612f-a8d0-4a67-a501-ac4455ef41fe#",
          },
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "link",
          text: "Single-Node Multi-Drive",
          attr: {
            href: "https://chat.openai.com/c/113c612f-a8d0-4a67-a501-ac4455ef41fe#",
          },
        },
        {
          type: "text",
          text: " tutorials provide instructions for the ",
        },
        {
          type: "link",
          text: "Docker",
          attr: {
            href: "https://www.docker.com/",
          },
        },
        {
          type: "text",
          text: " and ",
        },
        {
          type: "link",
          text: "Podman",
          attr: {
            href: "https://docs.podman.io/en/latest/",
          },
        },
        {
          type: "text",
          text: " container managers.",
        },
      ],
    },
  ];
  const handleAddTab = () => {
    context(true);
    return;
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
          // inkBarSize={{ height: "0" }}
          animation
          justify
        >
          {tabs.map((x, i) => (
            <TabPane destroyOnHide key={x.key} title={x.title}>
              <main>
                <section className="doc-content__text">
                  <div style={{ height: "200vh" }}>
                    {data.map((item, index) => {
                      return (
                        <DocsContentItemComponent
                          key={index}
                          item={item}
                        />
                      );
                    })}
                  </div>
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
