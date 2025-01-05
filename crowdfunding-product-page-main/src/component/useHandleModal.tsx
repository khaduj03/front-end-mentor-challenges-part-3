import React, { createContext, useState } from "react";

type MyContext = {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  setDefaultValue: React.Dispatch<React.SetStateAction<string>>; // Fixed type
};

export const useHandleModal = createContext<MyContext | undefined>(undefined);

interface ChildrenProps {
  children: React.ReactNode;
}

const HandlerProvider = ({ children }: ChildrenProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [defaultValue, setDefaultValue] = useState<string>(""); 

  // When the modal opens
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "clip";
  };

  // When the modal closes
  const closeModal = () => {
    document.body.style.overflow = "auto";
    setIsModalOpen(false);
  };

  const MyContextValue = {
    isModalOpen,
    defaultValue,
    setIsModalOpen,
    closeModal,
    openModal,
    setDefaultValue, 
  };

  return (
    <useHandleModal.Provider value={MyContextValue}>
      {children}
    </useHandleModal.Provider>
  );
};

export default HandlerProvider;
