import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoService {
    produtoRepository = ProdutoRepository.getInstance();

    cadastrarProduto(produtoData: any): Produto {
        if(!produtoData.id || !produtoData.preco || !produtoData.fabricante || !produtoData.nome || !produtoData.preco || !produtoData.fabricante ){
            throw new Error("Favor enviar os valores corretos");
        }

        let produto = new Produto(produtoData.id,produtoData.nome,produtoData.preco,produtoData.fabricante);
         this.produtoRepository.insereProduto(produto);
         return produto;
    }
    recuperarProdutoPorID(id: number){
        const produtoLocalizado: Produto|undefined = this.produtoRepository.filtrarProdutoPorID(id)
        return produtoLocalizado
    }
     // ... outros metodos
}