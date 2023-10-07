"use client";

import { StoreModal } from "@/components/ui/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [mounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return(
    <>
      <StoreModal/>
    </>
  )
};
