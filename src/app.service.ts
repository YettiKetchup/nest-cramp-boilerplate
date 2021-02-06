import { Injectable } from '@nestjs/common';
import { CrampService } from './modules/cramp/cramp.service';



@Injectable()
export class AppService {
    
    constructor(private _crampService: CrampService) { 
        this._crampService.init();
    }

    public getHello(): string {
        return 'Hello from Cramp!';
    }

}
