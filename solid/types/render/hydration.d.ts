import { Computation } from "../reactive/signal";
export type HydrationContext = {
    id: string;
    count: number;
};
type SharedConfig = {
    context?: HydrationContext;
    resources?: {
        [key: string]: any;
    };
    load?: (id: string) => Promise<any> | any | undefined;
    gather?: (key: string) => void;
    registry?: Map<string, Element>;
    done?: boolean;
    count?: number;
    effects?: Computation<any, any>[];
};
export declare const sharedConfig: SharedConfig;
export declare function setHydrateContext(context?: HydrationContext): void;
export declare function nextHydrateContext(): HydrationContext | undefined;
export {};
