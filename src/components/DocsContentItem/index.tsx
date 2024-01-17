import { IDocsContentNode } from "@/types/docs-type";

export interface IDocsContentItemProps {
  item: IDocsContentNode;
}
function DocsContentItemComponent({ item }: IDocsContentItemProps) {
  const { type, text, subs, attr } = item;
  const handleGetContentNode = () => {
    switch (type) {
      case "paragraph": 
        if (subs && subs.length > 0) {
          subs.map((item, index) => {
            return <DocsContentItemComponent key={index} item={item} />;
          });
        }
        break;
      case "h1":
        console.log("h");
        return <div className="docs-content-item__h1">{text}</div>;
      case "text":
        console.log("text");
        return <span className="docs-content-item__text">{text}</span>;
      case "link":
        return (
          <a href={attr?.href} className="docs-content-item__link">
            {text}
          </a>
        );
      default:
        return <div>{text}</div>;
    }
  };
  return (
    <div className="docs-content-item__wrapper">
      <div className="docs-content-item__content">{handleGetContentNode()}</div>
    </div>
  );
}

export default DocsContentItemComponent;
