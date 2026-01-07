import {Header} from "./components/ui/Header";
import {FirstScreen} from "./components/FirstScreen";
import {Navigator} from "./components/Navigator";
import {Experience} from "./components/Experience/ui/Experience.tsx";

function App() {

    return (
        <div className="app">
            <Header/>
            <main className="main">
                <FirstScreen/>
                <Experience />
            </main>
            <Navigator />
        </div>
    )
}

export default App
