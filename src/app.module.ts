import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrampModule } from './modules/cramp/cramp.module';



@Module({
    imports: [
        CrampModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
