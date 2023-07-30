import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { ValidationModule } from './modules/validation/validation.module';

@Module({
  imports: [PokemonModule, ValidationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
