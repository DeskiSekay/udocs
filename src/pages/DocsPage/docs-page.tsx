import "./docs-page.css";

function DocsPage() {
  const [showJoinContributer, setShowJoinContributer] = useState<boolean>(false);
  const [pageMode, setPageMode] = useState<string>("browse");
  const [docsGalleryParams, setDocsGalleryParams] = useState<IDocsGalleryListParams>({
    list: ["1", "2", "3"],
  });
  const [docsListParams, setDocsListParams] = useState<IDocsChapterListParams>({
    collapse: false,
  });
  const [docsContentParams, setDocsContentParams] = useState<IDocsContentParams>({
    collapse: false,
  });
  const handleDocsListChange = (action: string, state: unknown) => {
    switch (action) {
      case "collapse": {
        const newState = state as boolean;
        setPageMode(() => (newState ? "read" : "browse"));
        setDocsListParams({
          ...docsListParams,
          collapse: newState,
        });
        break;
      }
      default:
        break;
    }
  };
  const handleDocsContentChange = (action: string, state: unknown) => {
    switch (action) {
      case "collapse": {
        const newState = state as boolean;
        setPageMode(() => (newState ? "collapse" : "read"));
        setDocsListParams({
          ...docsListParams,
          collapse: true,
        });
        setDocsContentParams({
          ...docsContentParams,
          collapse: newState,
        });
        break;
      }
    }
  };
  return (
    <div className="docs-page__wrapper w-full h-full">
      <DocsDataProvider />
    </div>
    <ContextShowJoinContributer.Provider value={setShowJoinContributer}>
      <div className="docs-page__wrapper w-full h-full">
        <div className={`docs-page docs-page__${pageMode} w-full h-full`}>
          <section className="docs-page__col">
            <DocsGalleryListComponent params={docsGalleryParams} />
          </section>
          <section className="docs-page__col">
            <DocsChapterListContent params={docsListParams} onChange={handleDocsListChange} />
          </section>
          <section className="docs-page__col">
            <DocsContentComponent params={docsContentParams} onChange={handleDocsContentChange} />
          </section>
        </div>
        <Modal
          visible={showJoinContributer}
          onOk={() => setShowJoinContributer(false)}
          onCancel={() => setShowJoinContributer(false)}
          simple
        >
          <div className="modal-join-contributer">
            <Typography.Title heading={6}>Sry, Only for contributer</Typography.Title>
            <Typography.Text>
              We're looking for contributors to help us build the best developer experience. If you're
              interested, please click <Link href="#">here</Link>.
            </Typography.Text>
          </div>
        </Modal>
      </div>
    </ContextShowJoinContributer.Provider>
  );
}

export default DocsPage;
