import Header from './components/home/header/Header'
import Section from './components/home/section/Section'
import Footer from '../src/components/Footer'
import './styles/styles.scss'
import Info from '../src/components/Info';
import Contact from '../src/components/Contact';
import Sidemenu from '../src/components/Sidemenu';
import Welcome from '../src/components/Welcome';
function App() {

  return (
    <>
    <Sidemenu/>
    <Welcome/>
      <Header />
      <Info></Info>
      <Contact/>
      <Section />
      <Footer />
    </>
  )
}


export default App
