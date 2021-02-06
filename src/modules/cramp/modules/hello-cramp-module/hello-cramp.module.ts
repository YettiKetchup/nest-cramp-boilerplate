import { ICrampModule, IEntity, IEntityStorage, ISystemsContainer } from "src/libs/cramp-nest-integration/cramp/type-definitions/interfaces";
import HelloCrampContainer from "./containers/hello-cramp.container";



export default class HelloCrampModule implements ICrampModule<undefined> {
    
    private _helloCrampContainer: ISystemsContainer<undefined> = null;

    constructor(private _entityStorage: IEntityStorage<IEntity<any>>) {}

    init(): void {
        this._helloCrampContainer = new HelloCrampContainer().create(this._entityStorage);
    }

    execute(): void {
        this._helloCrampContainer.execute();
    }

    destroy(): void { }

}