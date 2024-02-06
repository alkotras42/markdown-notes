import {
  RootLayout,
  Sidebar,
  Content,
  DraggableTopBar,
  ActionButtonsRow,
  NotePreviewList,
  MarkdownEditor
} from '@/components'
const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className=" bg-zinc-800">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900 border-l-white/20">
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
