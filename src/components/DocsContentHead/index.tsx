import "./index.css";

function DocsContentHeadComponent() {
  return (
    <div className="docs-content-head__wrapper">
      <div className="docs-content-head">
        <div className="docs-content-head__group docs-content-head__first">
          <div className="doc-content-head__opts">
            <div className="doc-content-head__opt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </div>
            <div className="doc-content-head__opt"></div>
            <div className="doc-content-head__opt"></div>
          </div>
        </div>
        <div className="docs-content-head__group docs-content-head__second">
          Description
        </div>
        <div className="docs-content-head__group docs-content-head__third">
          Description
        </div>
      </div>
    </div>
  );
}

export default DocsContentHeadComponent;
