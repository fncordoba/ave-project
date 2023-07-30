import { Controller, Get, Param } from '@nestjs/common';
import { ValidationService } from './validation.service';

@Controller('validation')
export class ValidationController {
  constructor(private readonly validationService: ValidationService) {}

  @Get('multiply/:x/:y')
  multiplyWithoutAsterisk(
    @Param('x') x: number,
    @Param('y') y: number,
  ): number {
    return this.validationService.multiplyWithoutAsterisk(x, y);
  }

  @Get('validate-password/:password')
  validatePassword(@Param('password') password: string): any {
    return this.validationService.validatePassword(password);
  }

  @Get('number/:numbers')
  getStatistics(@Param('numbers') numbers: string) {
    const numberArray = numbers.split(',').map(Number);
    return this.validationService.getStatistics(numberArray);
  }
}
