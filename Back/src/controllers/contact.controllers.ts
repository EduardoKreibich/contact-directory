import { Request, Response } from "express";
import { ContactCreate } from "../interfaces";
import contactServices from "../services/contact.services";

const createContact = async (req: Request, res: Response): Promise<Response> => {
  const userId: string = String(res.locals.decoded.sub);
  const contact: ContactCreate = await contactServices.createContact(req.body, userId);

  return res.status(201).json(contact);
};

const readContact = async (req: Request, res: Response): Promise<Response> => {
  const contacts: ContactCreate[] = await contactServices.readContact();

  return res.status(200).json(contacts);
};

const retrieveContact = async (req: Request, res: Response): Promise<Response> => {
  const id: string = String(req.params.id);
  const recipe = await contactServices.retrieveContact(id);

  return res.status(201).json(recipe);
};

const updatePartialContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = req.params.id;
  const { body } = req;

  const contact: ContactCreate = await contactServices.updatePartialContact(
    body,
    contactId
  );

  return res.status(200).json(contact);
};

const removeContact = async (req: Request, res: Response): Promise<Response> => {
  await contactServices.removeContact(res.locals.foundEntity.id);

  return res.status(204).json();
};

export default { createContact, readContact, retrieveContact, updatePartialContact, removeContact }
