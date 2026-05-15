import { Produto } from "../model/Produto";


export class ProdutoRepository {
    private static instance : ProdutoRepository ;
    private produtoList : Produto[] = [];
    
     private constructor () {} // impede new externo
    
     public static getInstance () : ProdutoRepository {
     if (!this.instance ) {
     this.instance = new ProdutoRepository () ;
     }
     return this.instance ; // sempre a mesma instancia
     }
    
     insereProduto (produto: Produto) {
     this.produtoList.push (produto);
     }
     filtrarProdutoPorID (id: number):Produto|undefined{
        const filtrados = this.produtoList.filter(produtos => produtos.id === id);
        if(filtrados.length > 0)   
        return filtrados[0]
        return undefined
     }
     // ... outros metodos
     }
    