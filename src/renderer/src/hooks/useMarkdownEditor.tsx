import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/store'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import React from 'react'
import { throttle } from 'lodash'
import { autoSaveTime } from '@shared/constants'

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = React.useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) return

      console.info(`Auto saving note ${selectedNote.title}`)

      await saveNote(content)
    },
    autoSaveTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleNoteChange = async () => {
    if (!selectedNote) return

    handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()

    if (!content) return

    await saveNote(content)
  }

  return {
    selectedNote,
    editorRef,
    handleAutoSaving,
    handleNoteChange
  }
}
