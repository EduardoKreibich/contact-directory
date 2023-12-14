import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const ContactsContext = createContext({});

export const ContactsProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddContactOpen, setModalAddContactOpen] = useState(false);

  const { contacts, setContacts } = useContext(UserContext);

  const userAddContact = async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts([...contacts, data]);
      toast.success("Contato adicionado com sucesso!");

      setModalAddContactOpen(false);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const editContact = async (formData, contactId) => {
    console.log(formData)
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.put(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts((contacts) =>
      contacts.map((contact) => {
          if (contact.id === contactId) {
            return data;
          } else {
            return contact;
          }
        })
      );
      toast.success("Contato atualizado com sucesso!");
      setModalOpen(false);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const removeContact = async (contactId) => {
    try {
      console.log(contactId)
      const token = localStorage.getItem("token");
      await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts((contacts) => contacts.filter((contact) => contact.id !== contactId));
      toast.success("Contato removido com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        userAddContact,
        modalOpen,
        setModalOpen,
        modalAddContactOpen,
        setModalAddContactOpen,
        removeContact,
        editContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
