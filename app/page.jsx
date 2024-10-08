import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
const Home = () => { 
  return (
    <section className="h-full mb-6">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pd-24">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello! I am <br /> 
              <span className="text-transparent bg-gradient-to-b from-accent to-white bg-clip-text">Naveen Dasunpriya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m an undergraduate pursuing a <span className="font-bold text-blue-500">BSc (Hons) in Information Technology at SLIIT </span>. 
              Passionate about creative design and coding, I combine creativity and technology to bring ideas to life. 
              Explore my work and see how innovation meets execution. 
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
            <a 
                href="/Naveen Dasunpriya.pdf" 
                download 
              >
            <Button 
              variant="outline"
              size="lg"
              className="flex items-center gap-2 -mt-5 uppercase bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary"
            >
                <span>Download CV</span>
                <FiDownload className="text-xl text-accent-hover"/>
              </Button></a>
              <div className="flex gap-4 -mt-3">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border boder-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transitio-all duration-500"
                  />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;