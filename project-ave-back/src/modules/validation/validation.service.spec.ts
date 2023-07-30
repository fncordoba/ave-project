import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(async () => {
    service = new ValidationService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('multiplyWithoutAsterisk', () => {
    it('should return a number', () => {
      const result = service.multiplyWithoutAsterisk(2, 2);
      expect(typeof result).toBe('number');
    });

    it('should return the correct result', () => {
      const result = service.multiplyWithoutAsterisk(2, 2);
      expect(result).toBe(4);
    });

    it('should return the correct result when y is negative', () => {
      const result = service.multiplyWithoutAsterisk(2, -2);
      expect(result).toBe(-4);
    });
  });

  describe('validatePassword', () => {
    it('should return an object', () => {
      const result = service.validatePassword('test');
      expect(typeof result).toBe('object');
    });

    it('should return the correct result', () => {
      const result = service.validatePassword('testT');
      expect(result).toEqual({
        length: false,
        hasLowercase: true,
        hasUppercase: true,
        noConsecutiveLetters: true,
        hasFourNumbers: false,
        noConsecutiveNumbers: true,
        hasTwoSpecialChars: false,
        noRepeatedSpecialChars: true,
        noSpecialCharsTogether: true,
        noZero: true,
        noSpaces: true,
        isValid: false,
      });
    });

    it('should return the correct result when password is valid', () => {
      const result = service.validatePassword('Test1234!g@g#g$g%g^g&g*');
      expect(result).toEqual({
        length: true,
        hasLowercase: true,
        hasUppercase: true,
        noConsecutiveLetters: true,
        hasFourNumbers: true,
        noConsecutiveNumbers: true,
        hasTwoSpecialChars: true,
        noRepeatedSpecialChars: true,
        noSpecialCharsTogether: true,
        noZero: true,
        noSpaces: true,
        isValid: true,
      });
    });
  });

  describe('getStatistics', () => {
    it('should return an object', () => {
      const result = service.getStatistics([1, 2, 3]);
      expect(typeof result).toBe('object');
    });

    it('should return the correct result', () => {
      const result = service.getStatistics([1, 2, 3]);
      expect(result).toEqual({
        count: 3,
        evenPercentage: 33.33333333333333,
        oddPercentage: 66.66666666666666,
        greaterThan1000Percentage: 0,
        max: 3,
        min: 1,
        minPercentage: 33.33333333333333,
        average: 2,
        averagePercentage: 66.66666666666666,
      });
    });
  });
});
