import { Request, Response, NextFunction} from 'express';
import { AuthRequest } from '../../auth/auth.types';
import Lists from './lists.model';


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

export async function handleUpdateLists(req: AuthRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    const user = req.user

    const query = { _id: id, userId: user?._id}

    const update = {
        link: req.body.link,
        tittle: req.body.tittle,
        description: req.body.description,
        Lists: { $push: req.body}
    }
  
    const list = await Lists.findOneAndUpdate(query, update, { new: true });
  
    if (!list) {
      return res.status(404).json({ message: 'list not found' });
    }
  
    return res.status(200).json(list);
  }



export async function handleDeleteLists(req: AuthRequest, res: Response,  next: NextFunction) {
    const { id } = req.params;
    const user = req.user;

    const query = { _id: id, userId: user?._id}

    
    try {
     const delet = await Lists.findOneAndDelete(query)

      if (!delet) {
        return res.status(404).json({ message: 'Not authorized' });
      }
        return res.status(200).json(delet);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}