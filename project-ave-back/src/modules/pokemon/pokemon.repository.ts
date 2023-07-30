import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonRepository {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';

  async getPokemonsByTypeCount(type: string): Promise<number> {
    const response = await axios.get(`${this.baseUrl}/type/${type}`);
    return response.data.pokemon.length;
  }

  async getPokemonsByType(type: string): Promise<string[]> {
    const response = await axios.get(`${this.baseUrl}/type/${type}`);
    return response.data.pokemon.map(
      (pokemonWrapper) => pokemonWrapper.pokemon.name,
    );
  }

  async getPokemonsByTwoTypes(type1: string, type2: string): Promise<any[]> {
    const pokemonsType1 = await this.getPokemonsByType(type1);
    const pokemonsType2 = await this.getPokemonsByType(type2);
    return Array.from(
      new Set(
        pokemonsType1.filter((pokemon) => pokemonsType2.includes(pokemon)),
      ),
    );
  }

  async getPokemonNumber(name: string): Promise<number> {
    const { data } = await axios.get(`${this.baseUrl}/pokemon/${name}`);
    return data.id;
  }

  async getPokemonStats(id: number): Promise<object> {
    const { data } = await axios.get(`${this.baseUrl}/pokemon/${id}`);
    const stats = data.stats.map((stat) => {
      return {
        name: stat.stat.name,
        baseStat: stat.base_stat,
      };
    });
    return stats;
  }

  async getOrderPokemon(
    orderBy: string,
    pokemonIds: number[],
  ): Promise<object> {
    const pokemons = await Promise.all(
      pokemonIds.map(async (id) => {
        const { data } = await axios.get(`${this.baseUrl}/pokemon/${id}`);
        return {
          name: data.name,
          weight: data.weight,
          types: data.types.map((type) => type.type.name),
        };
      }),
    );

    pokemons.sort((a, b) => {
      if (orderBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (orderBy === 'weight') {
        return a.weight - b.weight;
      } else {
        return a.types[0].localeCompare(b.types[0]);
      }
    });

    return pokemons;
  }

  async checkPokemonType(id: number, type: string): Promise<boolean> {
    try {
      const { data } = await axios.get(`${this.baseUrl}/pokemon/${id}`);
      return data.types.some((t) => t.type.name === type);
    } catch (error) {
      throw new Error('Error while checking pokemon type: ' + error.message);
    }
  }
}
