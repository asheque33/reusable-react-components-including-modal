import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const ModalContext = createContext<TModalContext | null>(null);

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
type TModalContext = {
  onClose: () => void;
};
type TCloseButton = {
  children?: ReactNode;
};
type THeader = {
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutSideClose = (event: MouseEvent) => {
    console.log(event.target);
    console.log(containerRef.current);
    if (!containerRef.current?.contains(event.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible ",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutSideClose}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded-md p-4"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    /* parent=> button -> "relative" */
    /* children => svgIcon ->  absolute left-[350px] -top-2 */
    <button onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-6 h-6 bg-white text-red-600 p-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};
Modal.CloseButton = CloseButton;

const Header = ({ children }: THeader) => {
  return (
    <div className="w-full flex justify-evenly items-center mb-3">
      {children}
    </div>
  );
};
Modal.Header = Header;

export default Modal;
