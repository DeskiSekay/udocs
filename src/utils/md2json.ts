interface IMdNode {
  t: string;
  c?: string | undefined;
  a?: IMdNodeAttr | undefined;
  s?: IMdNode[] | undefined;
}
interface IMdNodeAttr {}
const result: IMdNode[] = [];
const resolveLines = (text: string) => {
  text.split("\n").forEach((line) => {
    if (line.trim() !== "") {
      const s: IMdNode[] = [];
      // s.push(resolveBlock(line.trim()));
      resolveBlock(line.trim());
      const par: IMdNode = {
        t: "par",
        s,
      };
      result.push(par);
    }
  });
};
const resolveBlock = (line: string) => {
  if (line === "---" || line === "- - -" || line === "***" || line === "* * *") {
    return {
      t: "hr",
    };
  }
  const matchHeader = line.match(/^(#{1,6})\s(.+)$/);
  if (matchHeader) {
    return {
      t: `h${matchHeader[1].length}`,
      c: matchHeader[2],
      a: { link: `#${matchHeader[2].toLowerCase().replace(/\s/g, "-")}` },
    };
  }
  if (line.startsWith("> ")) {
  }
  if (line.startsWith("- ") || line.startsWith("* ") || line.startsWith("+ ")) {
    const s = getNode(line.slice(1));
    console.log(s);
  }
  const matchLink = line.match(/\[(.*?)\]\((.*?)\)/);
  const matchOrderList = line.match(/^\d+\.\s(.*)/);
  if (matchOrderList) {
    return {
      t: "ol",
      c: [
        {
          t: "li",
          c: matchOrderList[1],
        },
      ],
    };
  }
  const matchCode = line.match(/^`{3}(.*)`{3}/);
  if (matchCode) {
  }
  return {
    t: "txt",
    c: line,
  };
};
const getNode = (line: string): IMdNode[] => {
  const _r: IMdNode[] = [];
  let _s = "";
  let _f = "";
  for (let i = 0; i < line.length; i++) {
    const _c = line.charAt(i);
    const _n = line.charAt(i + 1);
    switch (_c) {
      case "*":
        if (_f === "*") {
          _r.push(createNode("txt", _s, { b: true }));
        } else {
          _r.push(createNode("txt", _s));
          _s = "";
        }
        break;
      case "`":
        break;
      case "*":
        break;
      case "~":
        break;
      case "_":
        break;
      default:
        _s += _c;
        break;
    }
  }
  return [];
};
const createNode = (t: string, c?: string, a?: IMdNodeAttr, s?: IMdNode[]): IMdNode => {
  return {
    t,
    c,
    a,
    s,
  };
};
