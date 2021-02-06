import { CrampEntity, CrampEntityFactory } from "src/libs/cramp-nest-integration/types/bindings.types";
import HelloCrampComponent from "../components/hello-cramp.component";



export default class HelloCrampEntity extends CrampEntityFactory<undefined> {

    public create(id: string): CrampEntity {
        const entity: CrampEntity = new CrampEntity(id);
        const helloComponent: HelloCrampComponent = new HelloCrampComponent();

        entity.components.push(helloComponent);
        return entity;
    }

}