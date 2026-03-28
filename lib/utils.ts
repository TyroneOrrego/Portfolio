import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (id: string, offset = 0) => {
  const element = document.getElementById(id)
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: offsetTop - offset,
      behavior: "smooth",
    })
  }
}
