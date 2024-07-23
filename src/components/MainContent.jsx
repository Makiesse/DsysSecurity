import About from "./About"
import Projectos from "./Projectos"
import Tecnologias from "./Tecnologias"
import "../styles/components/maincontent.sass"


const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Tecnologias />
      <Projectos />
    </main>
  )
}

export default MainContent