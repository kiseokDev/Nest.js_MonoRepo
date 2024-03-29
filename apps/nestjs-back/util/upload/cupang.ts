import { Product } from 'apps/nestjs-back/src/product/entities/product.entity';
import { customCrawler } from './customPuppeteer';
import { UploadResult, platFormInterface } from './uploadCommand';

export class CupangUpload implements platFormInterface {
  upload(product: Product): UploadResult {
    return customCrawler.cupangStoreUplaod(product);
  }
}
