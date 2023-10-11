import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    /* twMerge is a function that merges tailwind classes
        for example: 
        twMerge('text-red-500', 'bg-blue-500') => 'text-red-500 bg-blue-500'*/
    return twMerge(clsx(inputs))
}