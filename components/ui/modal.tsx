"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface ModelProps {
  title: string;
  discription: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModelProps> = ({
  title,
  discription,
  isOpen,
  onClose,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> {title}</DialogTitle>
          <DialogDescription>{discription}</DialogDescription>
        </DialogHeader>
        <div>
        {children}

        </div>
      </DialogContent>
    </Dialog>
  );
};