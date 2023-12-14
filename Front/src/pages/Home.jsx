import About from "../components/Home/About"
import CarouselWelcome from "../components/Home/CarouselWelcome"
import Categories from "../components/Home/Categories"
import Destacado from "../components/Home/Destacado"
import Newsletter from "../components/Home/Newsletter"
import Services from "../components/Home/Services"
import Video from "../components/Home/Video"

const Home = () => {
    return (
        <main>
            <CarouselWelcome />
            <Categories />
            <Video />
            <Destacado />
            <About />
            <Services />
            <Newsletter />
        </main>
    )
}

export default Home