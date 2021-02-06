import { IEntity, IEntityController } from "../cramp/type-definitions/interfaces";
import CrampNestComponent from "../integration/component/cramp-nest.component";



export interface ICrampNestEntity extends IEntity<CrampNestComponent>, IEntityController<CrampNestComponent> {
    
}