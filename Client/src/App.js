import './App.css';
import DesktopConversation from './Pages/Conversation/DesktopCoversation';
import AppRouter from './Router';

function App() {
  return (
    <div className="App bg-[#212121] h-screen w-screen flex justify-center items-center gap-4 p-10">
      <AppRouter/>
      <DesktopConversation/>
    </div>
  );
}

export default App;
