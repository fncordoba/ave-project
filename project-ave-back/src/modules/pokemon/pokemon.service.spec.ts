import { PokemonRepository } from './pokemon.repository';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(async () => {
    service = new PokemonService(PokemonRepository.prototype);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPokemonsByType', () => {
    it('should return a string', async () => {
      jest
        .spyOn(PokemonRepository.prototype, 'getPokemonsByType')
        .mockResolvedValue(['']);
      const result = await service.getPokemonsByType('grass');
      expect(typeof result).toBe('string');
    });
  });

  describe('getPokemonsByTypes', () => {
    it('should return a string array', async () => {
      jest
        .spyOn(PokemonRepository.prototype, 'getPokemonsByType')
        .mockResolvedValue(['']);
      const result = await service.getPokemonsByTypes('grass');
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('getPokemonNumber', () => {
    it('should return a string', async () => {
      jest
        .spyOn(PokemonRepository.prototype, 'getPokemonNumber')
        .mockResolvedValue(1);
      const result = await service.getPokemonNumber('bulbasaur');
      expect(typeof result).toBe('string');
    });
  });

  describe('getPokemonStats', () => {
    it('should return an object', async () => {
      jest
        .spyOn(PokemonRepository.prototype, 'getPokemonStats')
        .mockResolvedValue({});
      const result = await service.getPokemonStats(1);
      expect(typeof result).toBe('object');
    });
  });

  describe('getOrderPokemon', () => {
    it('should return an object', async () => {
      jest
        .spyOn(PokemonRepository.prototype, 'getOrderPokemon')
        .mockResolvedValue({});
      const result = await service.getOrderPokemon('id', '1,2');
      expect(typeof result).toBe('object');
    });
  });

  describe('checkPokemonType', () => {
    it('should return a boolean', async () => {
      jest
        .spyOn(PokemonRepository.prototype, 'checkPokemonType')
        .mockResolvedValue(true);
      const result = await service.checkPokemonType(1, 'grass');
      expect(typeof result).toBe('boolean');
    });
  });
});
