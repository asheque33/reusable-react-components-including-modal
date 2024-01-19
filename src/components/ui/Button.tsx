import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TVariantOptions;
type TVariant = "solid" | "outline" | "ghost";
type TVariantOptions = {
  variant: TVariant;
};

const Button = forwardRef<TRef, TButton>(
  ({ className, variant, children, ...rest }, ref) => {
    const getButton = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };
    return (
      <div>
        <button
          {...rest}
          ref={ref}
          className={cn(getButton(variant), className)}
        >
          {children}
        </button>
      </div>
    );
  }
);

export default Button;
