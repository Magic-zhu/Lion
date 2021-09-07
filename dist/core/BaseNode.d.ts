declare class BaseNode {
    id: number | string;
    x: number;
    y: number;
    width: number;
    height: number;
    parent: any;
    children: any;
    nodeType: string;
    attributes: {
        zIndex: number;
        borderRadius: number;
        backgroundColor: string;
        padding: number[];
        margin: number[];
    };
    constructor();
    copy(): void;
    addEventListener(): void;
    removeEventListener(): void;
    removeAllListeners(): void;
    attr(): void;
    removeAttribute(): void;
    append(child: BaseNode): void;
}
export default BaseNode;
