import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutosService {
    constructor(
        @InjectRepository(Produto)
        private readonly produtoRepository: Repository<Produto>,
    ) { }

    async create(produto: Produto): Promise<Produto> {
        if (!produto.nome || produto.nome.trim() === '') {
            throw new BadRequestException('O nome do produto não pode estar vazio.');
        }

        if (produto.preco < 0) {
            throw new BadRequestException('O preço do produto não pode ser negativo.');
        }

        return this.produtoRepository.save(produto);
    }

    async findAll(): Promise<Produto[]> {
        return this.produtoRepository.find();
    }

    async findOne(id: number): Promise<Produto> {
        const produto = await this.produtoRepository.findOneBy({ id });
        if (!produto) {
            throw new BadRequestException('Produto não encontrado.');
        }
        return produto;
    }
}
