'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "../modal"

export const StoreModal=()=>{
    const storeModal =useStoreModal()
    return(
        
        <Modal
         title="Create Store"
         discription="Add a new store to Manage products and Catagories"
         isOpen={storeModal.isOpen}
         onClose={storeModal.onClose}
         >
            Creat Store Form
        </Modal>
    )

}