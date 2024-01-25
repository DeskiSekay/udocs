export type TDeviceType = "mobile" | "tablet" | "desktop" | "unknown";
export interface ICommonComponentProps<P, D> {
  params: P;
  data: D;
  action: {
    handleDataAction: (action: string, state: unknown, src?: string) => void;
    handleViewAction: (action: string, state: unknown, src?: string) => void;
  };
}
