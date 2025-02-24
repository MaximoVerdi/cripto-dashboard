import 'boxicons/css/boxicons.min.css';
import '../components/index.css'
import { Header, HeroSection, Bento, Coins, InfoSection, FAQ } from '../components/components.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Bento />
      <Coins />
      <InfoSection />
      <FAQ />
    </div>
  )
}

export { Home };