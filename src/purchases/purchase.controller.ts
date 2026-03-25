import { Controller, Get, Query } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import { PurchaseService } from './purchase.service';
import { ApiResponse } from 'src/interfaces/response.interface';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  async getAll(): Promise<ApiResponse<Purchase[]>> {
    const getData = await this.purchaseService.findAll();
    return {
      success: true,
      data: getData,
      message: 'Filtered purchases successfully',
    };
  }
}
