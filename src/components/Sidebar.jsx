import Avatar from '../img/fotoprefil.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return (
    <aside id="sidebar">
    <img src={Avatar} alt="Makiesse Afonso" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="#" className="btn">Baixar currículo</a>
    </aside>
  )
}

export default Sidebar
