import { DocumentDefinition, FilterQuery } from "mongoose";
import Lists, { ListsDocument } from "./lists.model";


export function getAllLists() {
  return Lists.find()
   
}

export function getListsById(id: string) {
   const lists = Lists.findById(id)
   return lists;
}

export function getLists(filter: FilterQuery<ListsDocument>) {
   const lists = Lists.findOne(filter);

   return lists;
}

export function createLists(userData: DocumentDefinition <Omit<ListsDocument, 'createdAt' | 'updatedAt'>>) {

  return Lists.create(userData);
  
}

export function updateLists(id: string, user: DocumentDefinition <Omit<ListsDocument, 'createdAt' | 'updatedAt'>>) {
   const updateLists = Lists.findByIdAndUpdate(id, user, { new: true });
   
   return updateLists;
}

export function deleteLists(id: string) {
   const deleteLists = Lists.findByIdAndDelete(id);
   return deleteLists;
}