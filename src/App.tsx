import {Header} from "@/components/ui/Header";
import {FirstScreen} from "@/components/FirstScreen";
import {Navigator} from "@/components/Navigator";
import {Experience} from "@/components/Experience";
import {Projects} from "@/components/Projects";

function App() {

    return (
        <div className="app">
            <Header/>
            <main className="main">
                <FirstScreen/>
                <Experience />
                <Projects />
            </main>
            <Navigator />
        </div>
    )
}

export default App
