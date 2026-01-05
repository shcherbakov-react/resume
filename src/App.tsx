import {Header} from "./components/ui/Header";
import {FirstScreen} from "./components/FirstScreen";
import {Navigator} from "./components/Navigator";

function App() {

    return (
        <div className="app">
            <Header/>
            <main className="main">
                <FirstScreen/>
            </main>
            <Navigator />
        </div>
    )
}

export default App
