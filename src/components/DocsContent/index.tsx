import DocsContentHeadComponent from "@/components/DocsContentHead";

function DocsContentComponent(){
    return <div className="docs-content__wrapper">
        <div className="doc-content__head">
            <DocsContentHeadComponent />
        </div>
        <div className="doc-content__body"></div>
        <div className="doc-content__foot"></div> 
    </div>
}

export default DocsContentComponent;