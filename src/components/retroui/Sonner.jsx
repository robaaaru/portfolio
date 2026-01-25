"use client";;
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast:
            "h-auto w-full p-3 md:p-4 bg-background border group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border flex items-center relative max-w-[280px] md:max-w-[356px]",
          description:
            "group-[.toast]:text-muted-foreground ml-2 text-xs md:text-sm font-sans",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground py-1 px-2 bg-background border-border shadow hover:shadow-xs hover:translate-[2px] duration-200 transition-all focus:shadow-none border-2 ml-auto h-fit min-w-fit",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-foreground py-1 px-2 text-sm bg-background border-border shadow hover:shadow-xs hover:translate-[2px] duration-200 transition-all focus:shadow-none border-2 ml-auto h-fit min-w-fit",
          title: "ml-2 font-sans text-sm md:text-base",
          closeButton:
            "absolute bg-background -top-1 -left-1 rounded-full p-0.5",
        },
        unstyled: true,
      }}
      style={{ bottom: '5rem' }}
      {...props} />
  );
};

export { Toaster };
