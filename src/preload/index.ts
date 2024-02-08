import { contextBridge, ipcRenderer } from 'electron'
import { GetNotes, ReadNote, WriteNote } from '@shared/types'
import { writeNote } from '@/lib'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO: Add preload fuction
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes',...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote',...args),
    writeNote: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote',...args)
  })
} catch (e) {
  console.warn(e)
}
