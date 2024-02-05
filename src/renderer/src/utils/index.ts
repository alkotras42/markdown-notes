import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

export const dateFormatter = new Intl.DateTimeFormat(window.context.locate, {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formateDateFromMs = (ms: number): string => dateFormatter.format(ms)
