import { Request, Response } from "express";
import { ProdutoService } from "../service/Productservice";


const produtoService = new ProdutoService();

export function cadastrarProduto(req: Request, res: Response) {
    try {
        const novoProduto = produtoService.cadastrarProduto(req.body);
        res.status(201).json({ mensagem: "Produto adicionado com sucesso !", produto: novoProduto });
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export function recuperarProdutoPorID(req: Request, res: Response):void{
    try{
        let id:any = Number(req.params.id);
        const produtolocalizado = produtoService.recuperarProdutoPorID(id)
        if (produtolocalizado){
        res.status(200).json(produtolocalizado);
    }   else {
        res.status(404).json({ Message: "Produto não encontrado" });
    }

    }catch(e: unknown){
        res.status(400).json({Message: "Informar ID valido"});
    }
}
