import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [DatabaseModule, ProdutosModule],
})
export class AppModule { }
