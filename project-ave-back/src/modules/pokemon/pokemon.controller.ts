import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get('/type/:type')
  async getPokemonsByType(@Param('type') type: string): Promise<any> {
    return this.pokemonService.getPokemonsByType(type);
  }

  @Get('/types/:types')
  async getPokemonsByTypes(@Param('types') types: string): Promise<string[]> {
    return this.pokemonService.getPokemonsByTypes(types);
  }

  @Get('number/:name')
  async getPokemonNumber(@Param('name') name: string): Promise<string> {
    return this.pokemonService.getPokemonNumber(name);
  }

  @Get('stats/:id')
  async getPokemonStats(@Param('id') id: number): Promise<object> {
    return this.pokemonService.getPokemonStats(id);
  }

  @Get('order/:orderBy/:pokemonIds')
  async getOrderPokemon(
    @Param('orderBy') orderBy: string,
    @Param('pokemonIds') pokemonIds: string,
  ): Promise<object> {
    return this.pokemonService.getOrderPokemon(orderBy, pokemonIds);
  }

  @Get('checktype/:id/:type')
  async checkPokemonType(
    @Param('id') id: number,
    @Param('type') type: string,
  ): Promise<boolean> {
    return this.pokemonService.checkPokemonType(id, type);
  }
}
