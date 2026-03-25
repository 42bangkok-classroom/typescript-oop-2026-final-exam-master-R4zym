import { Injectable } from "@nestjs/common";
import { join } from "path";
import { Product } from "./product.interface";
import * as fs from 'fs';

@Injectable()
export class ProductService {

    private readonly ProductPath = join(process.cwd(), 'data', 'products.json')

    private readJsonFile<T>(filePath: string): T[] {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '[]', 'utf8');
            return []
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data) as T[];
    }

    async findAll(): Promise<Product[]> {
        return this.readJsonFile<Product>(this.ProductPath);
    }
}