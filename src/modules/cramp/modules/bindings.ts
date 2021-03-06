import { IEntityFactory } from "../../../libs/cramp-nest-integration/cramp/type-definitions/interfaces";
import CachedCrampNestComponent from "../../../libs/cramp-nest-integration/integration/component/cached-cramp-nest.component";
import CrampNestComponent from "../../../libs/cramp-nest-integration/integration/component/cramp-nest.component";
import CrampNestEntity from "../../../libs/cramp-nest-integration/integration/entity/cramp-nest.entity";
import CrampNestSystem from "../../../libs/cramp-nest-integration/integration/system/cramp-nest.system";



export class            CrampComponent                  extends     CrampNestComponent {};
export class            CrampCachedComponent            extends     CachedCrampNestComponent {};
export class            CrampNode                       extends     Object {};
export abstract class   CrampSystem<TData>              extends     CrampNestSystem<TData> {};
export class            CrampEntity                     extends     CrampNestEntity {};

export abstract class   CrampEntityFactory<TData>      implements   IEntityFactory<CrampComponent, CrampEntity, TData> {
    public abstract create(id: string, data?: TData): CrampEntity;
}