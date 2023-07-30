import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PokemonRepository } from './pokemon.repository';

@Module({
  providers: [PokemonService, PokemonRepository],
  controllers: [PokemonController],
})
export class PokemonModule {}
