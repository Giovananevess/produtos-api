import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) { }

    @Post()
    create(@Body() produto: Produto): Promise<Produto> {
        return this.produtosService.create(produto);
    }

    @Get()
    findAll(): Promise<Produto[]> {
        return this.produtosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Produto> {
        return this.produtosService.findOne(+id);
    }
}
