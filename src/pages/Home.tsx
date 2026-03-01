import Header from "../components/Header"
import NewsLetter from "../components/NewsLetter"
import SpecialityMenu from "../components/SpecialityMenu"
import TopDoctors from "../components/TopDoctors"

const Home = () => {
  return (
    <div>
       <Header/>
       <SpecialityMenu/>
       <TopDoctors/>
       <NewsLetter/>
    </div>
  )
}

export default Home