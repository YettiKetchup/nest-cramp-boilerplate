import { ICachedObject } from "../../cramp/type-definitions/interfaces";
import CrampNestComponent from "./cramp-nest.component";



export default class CachedCrampNestComponent extends CrampNestComponent implements ICachedObject {

    private _inCache: boolean = false;

    public get inCache(): boolean { return this._inCache; }
    public set inCache(value: boolean ) { this._inCache = value; }

}