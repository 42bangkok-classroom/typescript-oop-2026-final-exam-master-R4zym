import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';
import { Purchase } from './purchase.interface';

@Injectable()
export class PurchaseService {
  private readonly purchasePath = join(process.cwd(), 'data', 'purchases.json');

  private readJsonFile<T>(filePath: string): T[] {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]', 'utf8');
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data) as T[];
  }

  async findAll(): Promise<Purchase[]> {
    return await this.readJsonFile<Purchase>(this.purchasePath);
  }
}
