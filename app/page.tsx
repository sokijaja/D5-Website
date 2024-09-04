import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import FAQ from './components/FAQ/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Wework />
      <Ourteam />
      {/* <Featured /> */}
      <FAQ />
      <Joinus />
      <Insta />
    </main>
  )
}
