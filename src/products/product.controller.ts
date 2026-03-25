import { Controller, Get } from '@nestjs/common';
import { Product } from './product.interface';
import { ProductService } from './product.service';
import { ApiResponse } from 'src/interfaces/response.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll(): Promise<ApiResponse<Product[]>> {
    const getData = await this.productService.findAll();
    return {
      success: true,
      data: getData,
      message: 'Fetched products successfully',
    };
  }
}
