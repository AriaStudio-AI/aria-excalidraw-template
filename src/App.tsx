import { Excalidraw } from '@excalidraw/excalidraw';

export default function App() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Excalidraw
        theme="dark"
        initialData={{
          appState: {
            viewBackgroundColor: '#0f172a',
          },
        }}
      />
    </div>
  );
}
