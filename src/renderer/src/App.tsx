import { RootLayout, Sidebar, Content, DraggableTopBar } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className=" bg-zinc-800">Sidebar</Sidebar>
        <Content className="border-l bg-zinc-900 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
