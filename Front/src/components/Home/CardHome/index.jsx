import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

import { StyledCard } from "./style.js";
import { ContactsContext } from "../../../providers/ContactsContext.jsx";



export const CardHome = ({ setContactSelect }) => {
  const { contacts } = useContext(UserContext);
  const { setModalOpen } = useContext(ContactsContext);

  return (
    <ul>
      {contacts.map((contacts) => (
        <StyledCard key={contacts?.id}>
          <button
            onClick={(e) => {
              {
                setModalOpen(true);
                setContactSelect(contacts);
              }
            }}
          >
            <p>{contacts?.name}</p>
            <p>{contacts?.email}</p>
            <p>{contacts?.telephone}</p>
          </button>
        </StyledCard>
      ))}
    </ul>
  );
};
