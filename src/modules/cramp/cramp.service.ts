import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import GlobalEntitiesStorage from 'src/libs/cramp-nest-integration/cramp/storage/global-entities.storage';
import { ICrampModule, IEntity, IEntityStorage } from 'src/libs/cramp-nest-integration/cramp/type-definitions/interfaces';
import { Storages } from './enums/storages.enum';
import { CrampEntity } from 'src/libs/cramp-nest-integration/types/bindings.types';
import HelloCrampEntity from './modules/hello-cramp-module/entities/hello-cramp.entity';
import HelloCrampModule from './modules/hello-cramp-module/hello-cramp.module';



@Injectable()
export class CrampService {
 
    private _entityStorage: IEntityStorage<IEntity<any>> = GlobalEntitiesStorage.create(Storages.GAME);

    public init(): void {
        const entities: CrampEntity[] = this._createEntities();
        this._entityStorage.add(...entities);

        // TODO: Remove this demo module! 
        const helloCrampModule: ICrampModule<undefined> = new HelloCrampModule(this._entityStorage);
        helloCrampModule.init();
        helloCrampModule.execute();
    }

    private _createEntities(): CrampEntity[] {
        const helloEntity: CrampEntity = new HelloCrampEntity().create(uuidv4());
        return [helloEntity];
    }

}
