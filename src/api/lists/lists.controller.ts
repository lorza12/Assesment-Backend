import { Request, Response, NextFunction} from 'express';
import { AuthRequest } from '../../auth/auth.types';


import { getAllLists, getListsById, deleteLists, createLists, updateLists } from "./lists.services";

export async function handleAllGetLists(req: Request, res: Response, next: NextFunction) {
    try {
        const products = await getAllLists();
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}

export async function handleGetLists(req: Request, res: Response,  next: NextFunction) {
    const { id } = req.params
    try {
        const products = await getListsById(id);

        if (!products) {
            return res.status(404).json({message: "user not found"});
        }

        return res.status(200).json(products); 
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}


export async function handleCreateLists(req: AuthRequest, res: Response, next: NextFunction) {
    const data = req.body;
    const user = req.user;
   try {
    const list = {
        ...data,
        userId:user?._id,
    }
    console.log(data)
    const newList = await createLists(list);
    
    return res.status(201).json(newList);
   } catch (error) {
    console.log(error);
        return res.status(500).json(error);
   }
}

export async function handleUpdateLists(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const data = req.body;
    console.log(data);
  
    const cart = await updateLists(id, data);
  
    if (!cart) {
      return res.status(404).json({ message: 'cart not found' });
    }
  
    return res.status(200).json(cart);
  }



export async function handleDeleteLists(req: Request, res: Response,  next: NextFunction) {
    const { id } = req.params;
    try {
      await deleteLists(id)
        return res.status(200).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}