import React, { createContext, useState, useRef, useEffect } from "react";

type MyContext = {
  isModalOpen: boolean;
  selectedPledge: string | null;
  openModal: () => void;
  closeModal: () => void;
  handleOpen: (id: number) => void;
  setSelectedPledge: React.Dispatch<React.SetStateAction<string | null>>;
  pledgeRefs: React.MutableRefObject<HTMLDivElement[]>;
};

export const useHandleModal = createContext<MyContext | undefined>(undefined);

interface ChildrenProps {
  children: React.ReactNode;
}

const HandlerProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPledge, setSelectedPledge] = useState<string | null>(null);
  const pledgeRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (isModalOpen && selectedPledge !== null) {
      const index = parseInt(selectedPledge, 10);
      const targetRef = pledgeRefs.current[index];
      if (targetRef) {
        targetRef.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [isModalOpen, selectedPledge]);

  const openModal = () => {
    setSelectedPledge("")
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleOpen = (id: number) => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
    setSelectedPledge(id.toString());
  };

  const contextValue: MyContext = {
    isModalOpen,
    selectedPledge,
    openModal,
    closeModal,
    handleOpen,
    setSelectedPledge,
    pledgeRefs,
  };

  return (
    <useHandleModal.Provider value={contextValue}>
      {children}
    </useHandleModal.Provider>
  );
};

export default HandlerProvider;
