import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({ isOpen = false, onClose, children, className }: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  return createPortal(
    <div 
      className={twMerge(
        "fixed inset-0 bg-black/60 z-40 flex justify-center items-center transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className={twMerge(
          "bg-charcoal-gray border border-cultured rounded-4xl p-4 max-w-lg w-full relative ml-4 mr-4 h-[80%] flex flex-col",
          "transition-all duration-300",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="flex w-full justify-end mb-3">
          <button 
            onClick={onClose}
            className="relative right-0 border border-cultured rounded-full py-2 px-3.5 cursor-pointer hover:border-carmine-pink hover:bg-carmine-pink/20 transition-all duration-300"
            aria-label="Close modal"
          >
            ✕            
          </button>
        </div>
        <div className="relative py-1 rounded-2xl overflow-y-auto flex-1 min-h-0">
          {children}
        </div>
      </div>
    </div>,
    portalRoot
  );
}