import { useState } from "react";
import { createContext } from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const UserContext = createContext({});


export const UserProvider = ({ children }) => {
  const [infoUser, setInfoUser] = useState(null);
  const [registering, setRegistering] = useState(false);
  const [enter, setEnter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([])
  const [user, setUser] = useState(null)
  const [modalUserOpen, setModalUserOpen] = useState(false);
  
  const currentAddress = window.location.pathname;
  
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const idUser = localStorage.getItem("userID")
    const userLogged = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/users/${idUser}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setContacts(data.contacts)
        setInfoUser(data);
        navigate(currentAddress);
      } catch (error) {
        toast.error("Algo deu errado, tente novamente!");
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      userLogged();
    }
  }, []);

  const navigate = useNavigate();

  const userRegister = async (formData) => {
    try {
      setRegistering(true);

      await api.post("/users", formData);

      toast.success("Usuário criado com sucesso");

      navigate("/");
    } catch (error) {
      toast.error("Algo deu errado");
    } finally {
      setRegistering(false);
    }
  };

  const userLogin = async (formData) => {
    try {
      setEnter(true);
      const  {data}  = await api.post("/login", formData);
      

      const { token } = data
      localStorage.setItem("token", token);

      setInfoUser(data.user);
      setContacts(data.user.contacts)
      localStorage.setItem("userID", data.user.id);

      toast.success("Login efetuado com sucesso");

      navigate("/home");
    } catch (error) {
      toast.error("E-mail ou senha inválidos");
    } finally {
      setEnter(false);
    }
  };

  const userLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    setInfoUser(null);
  };

  const editUser = async (formData, userId) => {
    console.log(formData)
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.patch(`/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser((user) =>
      contacts.map((user) => {
          if (user.id === userId) {
            return data;
          } else {
            return user;
          }
        })
      );
      toast.success("Usuário atualizado com sucesso!");
      setModalUserOpen(false);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };
  

  return (
    <UserContext.Provider
      value={{
        infoUser,
        setInfoUser,
        userLogin,
        userRegister,
        userLogout,
        registering,
        enter,
        loading,
        contacts,
        setContacts,
        editUser,
        setUser,
        user,
        modalUserOpen,
        setModalUserOpen

      }}
    >
      {children}
    </UserContext.Provider>
  );
};