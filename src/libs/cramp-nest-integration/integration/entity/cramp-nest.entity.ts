import BaseEntity from "../../cramp/core/entity/base.entity";
import { ICrampNestEntity } from "../../types/integration.interfaces";
import CrampNestComponent from "../component/cramp-nest.component";



export default class CrampNestEntity extends BaseEntity<CrampNestComponent> implements ICrampNestEntity {

}