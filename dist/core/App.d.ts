import { ApplicationOptions } from '../@types/index.d';
import Layer from './Layer';
declare class App {
    nodeType: string;
    root: HTMLDivElement;
    layers: Layer[];
    _layersSortedByIndex: any[];
    resolution: number;
    constructor(options?: ApplicationOptions);
    mount(element: HTMLDivElement): void;
    sortByzIndex(layers: Layer[]): Layer[];
    render(): void;
    append(layer: Layer): void;
    handleResolution(canvasEle: any): void;
    handleWindowResize(): void;
}
export default App;
