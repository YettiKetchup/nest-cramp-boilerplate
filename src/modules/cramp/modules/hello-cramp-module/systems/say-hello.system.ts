import { ComponentFilter } from "src/libs/cramp-nest-integration/cramp/type-definitions/types";
import { CrampSystem } from "src/libs/cramp-nest-integration/types/bindings.types";
import { ICrampNestEntity } from "src/libs/cramp-nest-integration/types/integration.interfaces";
import HelloCrampComponent from "../components/hello-cramp.component";



export default class SayHelloSystem extends CrampSystem<undefined> {

    protected readonly componentFilter: ComponentFilter = {
        include: [HelloCrampComponent]
    }

    public execute(entities: ICrampNestEntity[]) {
        for(let i = 0; i < entities.length; i++) {
            const helloMessage: string = entities[i].get(HelloCrampComponent).value;
            console.log(helloMessage);
        }
    }

}