import { Injectable } from '@nestjs/common';
import { PokemonRepository } from './pokemon.repository';

@Injectable()
export class PokemonService {
  constructor(private pokemonRepository: PokemonRepository) {}

  async getPokemonsByType(type: string): Promise<string> {
    try {
      const pokemonCount = await this.pokemonRepository.getPokemonsByType(type);

      return `Total pokemons with type ${type} are ${pokemonCount}`;
    } catch (error) {
      throw new Error('Error while fetching pokemon type: ' + error.message);
    }
  }

  async getPokemonsByTypes(types: string): Promise<string[]> {
    try {
      const typeArray = types.split(',');
      if (typeArray.length !== 2) {
        return this.pokemonRepository.getPokemonsByType(typeArray[0]);
      }

      return this.pokemonRepository.getPokemonsByTwoTypes(
        typeArray[0],
        typeArray[1],
      );
    } catch (error) {
      throw new Error('Error while fetching pokemon types: ' + error.message);
    }
  }

  async getPokemonNumber(name: string): Promise<string> {
    try {
      const pokemonId = await this.pokemonRepository.getPokemonNumber(
        name.toLowerCase(),
      );

      return `The id of the pokemon named ${name} is ${pokemonId}`;
    } catch (error) {
      throw new Error('Error while fetching pokemon number: ' + error.message);
    }
  }

  async getPokemonStats(id: number): Promise<object> {
    try {
      return await this.pokemonRepository.getPokemonStats(id);
    } catch (error) {
      throw new Error('Error while fetching pokemon stats: ' + error.message);
    }
  }

  async getOrderPokemon(orderBy: string, pokemonIds: string): Promise<object> {
    try {
      const pokemonIdsArray = pokemonIds.split(',').map(Number);
      return this.pokemonRepository.getOrderPokemon(orderBy, pokemonIdsArray);
    } catch (error) {
      throw new Error(
        'Error while fetching and ordering pokemons: ' + error.message,
      );
    }
  }

  async checkPokemonType(id: number, type: string): Promise<boolean> {
    try {
      return await this.pokemonRepository.checkPokemonType(id, type);
    } catch (error) {
      throw new Error('Error while checking pokemon type: ' + error.message);
    }
  }
}
