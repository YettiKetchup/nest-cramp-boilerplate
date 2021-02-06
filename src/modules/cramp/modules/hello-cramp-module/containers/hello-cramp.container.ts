
import SystemsContainer from "src/libs/cramp-nest-integration/cramp/systems-container/systems.container";
import { IEntity, IEntityStorage, ISystemContainerFactory, ISystemsContainer } from "src/libs/cramp-nest-integration/cramp/type-definitions/interfaces";
import SayHelloSystem from "../systems/say-hello.system";



export default class HelloCrampContainer implements ISystemContainerFactory {

    create(entityStorage: IEntityStorage<IEntity<any>>): ISystemsContainer<undefined> {
        const container: ISystemsContainer<undefined> = new SystemsContainer(entityStorage);

        container.add(SayHelloSystem);

        return container;
    }

}