import { string } from "pg-format";
import { AppDataSource } from "../data-source";
import { Contact, User } from "../entities";
import AppError from "../errors/App.error";
import { ContactCreate, ContactUpdate } from "../interfaces";
import { contactRepo, userRepo } from "../repositories";
import { contactCreateSchema, contactSchema, contactsReadSchema, userReturnSchema } from "../schemas";


const createContact = async (payload: ContactCreate, userId: string): Promise<ContactCreate> => {
  const user = await userRepo.findOneBy({ id: userId });
 
  if(!user){
    throw new AppError("User not found", 404);
  }

  const newContact: Contact = contactRepo.create({
    ...payload,
    user: user!

  });
  await contactRepo.save(newContact);

  return contactSchema.parse(newContact);
};

const readContact = async (): Promise<ContactCreate[]> => {
  const contacts = await contactRepo.find();

  return contactSchema.array().parse(contacts);
};

const retrieveContact = async (contactId: string): Promise<ContactCreate> => {
  const contact = await contactRepo.findOne({
    where: {
      id: contactId,
  }});
  

  if (!contact) throw new AppError("User not found", 404);

  return contactCreateSchema.parse(contact);
};

const updatePartialContact = async (payload: ContactUpdate, contactId: string): Promise<ContactCreate> => {
  const contact = await contactRepo.findOneBy({id: contactId})
  
  if(!contact){
    throw new AppError("Contact not found", 404)
  }

  const newContact = contactRepo.create({
    ...contact,
    ...payload
  })
  await contactRepo.save(newContact)

  return contactSchema.parse(newContact)
};

const removeContact = async (contactId: string): Promise<void> => {
  const contact = await contactRepo.findOneBy({id: contactId})

  if(!contact){
    throw new AppError("Contact not found", 404)
  }
  await contactRepo.remove(contact);
};

export default { createContact, readContact, retrieveContact, updatePartialContact, removeContact };