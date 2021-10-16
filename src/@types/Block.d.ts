import {LionElement} from './LionElememt';

export interface BlockOptions {
    width?:number
    height?:number
    x:number
    y:number
    borderRadius:number
    backgroundColor?:string
    borderColor?:string
    borderWidth?:number
    children?:LionElement
}
