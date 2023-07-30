import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {
  public multiplyWithoutAsterisk(x: number, y: number): number {
    let result = 0;
    for (let i = 0; i < Math.abs(y); i++) {
      result += Math.abs(x);
    }
    return y < 0 ? -result : result;
  }

  private isSpecialChar(char: string): boolean {
    const specialChars = '!@#$%^&*-_+=?';
    return specialChars.includes(char);
  }

  private checkNoConsecutiveLetters(password: string): boolean {
    for (let i = 1; i < password.length; i++) {
      if (/[a-zA-Z]/.test(password[i]) && password[i] === password[i - 1]) {
        return false;
      }
    }
    return true;
  }

  private checkNoConsecutiveNumbers(password: string): boolean {
    for (let i = 1; i < password.length; i++) {
      if (/\d/.test(password[i]) && password[i] === password[i - 1]) {
        return false;
      }
    }
    return true;
  }

  private checkNoRepeatedSpecialChars(password: string): boolean {
    let specialUsed = '';
    for (const element of password) {
      if (this.isSpecialChar(element)) {
        if (specialUsed.includes(element)) {
          return false;
        }
        specialUsed += element;
      }
    }
    return true;
  }

  private checkNoSpecialCharsTogether(
    password: string,
    specialChars: string,
  ): boolean {
    for (let i = 1; i < password.length; i++) {
      if (
        specialChars.includes(password[i]) &&
        specialChars.includes(password[i - 1])
      ) {
        return false;
      }
    }
    return true;
  }

  public validatePassword(password: string): any {
    const passwordValidations = {
      length: password.length >= 16,
      hasLowercase: password !== password.toUpperCase(),
      hasUppercase: password !== password.toLowerCase(),
      noConsecutiveLetters: this.checkNoConsecutiveLetters(password),
      hasFourNumbers: false,
      noConsecutiveNumbers: this.checkNoConsecutiveNumbers(password),
      hasTwoSpecialChars: false,
      noRepeatedSpecialChars: true,
      noSpecialCharsTogether: true,
      noZero: !password.includes('0'),
      noSpaces: !password.includes(' '),
    };

    let digitCount = 0;
    let specialCount = 0;
    const specialChars = '!@#$%^&*-_=+?';

    for (const element of password) {
      if (/\d/.test(element)) digitCount++;
      if (specialChars.includes(element)) {
        specialCount++;
      }
    }

    passwordValidations.hasFourNumbers = digitCount >= 4;
    passwordValidations.hasTwoSpecialChars = specialCount >= 2;
    passwordValidations.noRepeatedSpecialChars =
      this.checkNoRepeatedSpecialChars(password);
    passwordValidations.noSpecialCharsTogether =
      this.checkNoSpecialCharsTogether(password, specialChars);

    const isValid = Object.values(passwordValidations).every(
      (value) => value === true,
    );

    return { ...passwordValidations, isValid: isValid };
  }

  getStatistics(numbers: number[]) {
    const count = numbers.length;
    const even = numbers.filter((x) => x % 2 === 0).length / count;
    const odd = numbers.filter((x) => x % 2 !== 0).length / count;
    const greaterThan1000 = numbers.filter((x) => x > 1000).length / count;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const avg = numbers.reduce((a, b) => a + b, 0) / count;

    return {
      count: count,
      evenPercentage: even * 100,
      oddPercentage: odd * 100,
      greaterThan1000Percentage: greaterThan1000 * 100,
      max: max,
      min: min,
      minPercentage: (min / max) * 100,
      average: avg,
      averagePercentage: (avg / max) * 100,
    };
  }
}
