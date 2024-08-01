"use client"; // Add this line at the top of the file

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { useState, useEffect } from 'react';

const Home = () => { 
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    const fetchCommitCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/naveendasun321/events`); // Corrected the URL
        const data = await response.json();
        
        // Filter the data to get only the commit events
        const commitEvents = data.filter(event => event.type === 'PushEvent');
        
        // Set the commit count
        setCommitCount(commitEvents.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCommitCount();
  }, []);

  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pd-24">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I am <br /> 
              <span className="text-accent">Naveen Dasunpriya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a passionate software developer with experience in building dynamic web applications. I love to create intuitive user interfaces and improve user experiences through thoughtful design and coding practices.
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <a 
                href="/cv.pdf" // Link to your CV file in the public directory
                download // This attribute prompts the browser to download the file
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 uppercase bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl text-accent-hover"/>
                </Button>
              </a>
              <div className="flex gap-4">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo/>
            <div className="mt-8 text-center">
              <span className="text-4xl font-bold text-accent">{commitCount}</span>
              <p className="text-white/80">GitHub Commits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;