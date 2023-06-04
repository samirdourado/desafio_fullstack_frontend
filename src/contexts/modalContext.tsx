// import { useState } from "react"
// import { createContext } from "vm"


// // export const ModalContext = createContext({})

// interface ModalContextProps {
//     createModal: boolean;
//     setCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
//     editModal: boolean;
//     setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
//     deleteModal: boolean;
//     setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
//   }
  
//   export const ModalContext = createContext<ModalContextProps>({
//     createModal: false,
//     setCreateModal: () => {},
//     editModal: false,
//     setEditModal: () => {},
//     deleteModal: false,
//     setDeleteModal: () => {},
//   });

// const ModalProvider = ({ children }: any) => {
//     const [ createModal, setCreateModal ] = useState(false)
//     const [ editModal, setEditModal] = useState(false)
//     const [ deleteModal, setDeleteModal] = useState(false)

//     return (
//         <ModalContext.Provider value= {{
//             createModal,
//             setCreateModal,
//             editModal,
//             setEditModal,
//             deleteModal,
//             setDeleteModal
//         }}
//         >
//             { children }
//         </ModalContext.Provider>
//     )
// };

// export default ModalProvider