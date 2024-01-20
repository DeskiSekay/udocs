import { useEffect, useState } from "react";
import { TDeviceType } from "./types/system";
import { DeviceTypeContext } from "./contexts/system-context";
import DocsPage from "./pages/DocsPage/docs-page";

function App() {
  const [deviceType, setDeviceType] = useState<TDeviceType>("unknown");

  const handleSystemResize = () => {
    const { innerWidth } = window;
    if (innerWidth < 768) {
      setDeviceType("mobile");
    } else if (innerWidth < 1024) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleSystemResize);
    return () => {
      window.removeEventListener("resize", handleSystemResize);
    };
  }, []);
  return (
    <DeviceTypeContext.Provider value={deviceType}>
      <DocsPage />
    </DeviceTypeContext.Provider>
  );
}

export default App;
