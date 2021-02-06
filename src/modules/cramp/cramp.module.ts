import { Module } from '@nestjs/common';
import { CrampService } from './cramp.service';



@Module({
    imports: [],
    exports: [CrampService],
    providers: [CrampService]
})
export class CrampModule {}
