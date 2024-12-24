import React from "react";
import Work from "../Components/Work";
import { workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 mt-20">
      <section>
        <h1 className="text-3xl text-dark-heading dark:text-rose-600 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About
        </h1>
        <p className=" py-8 lg:max-w-3xl text-green-500 font-medium">Hey👋, I am an Computer Science and Engineering student at Maulana Azad National Institute of Tehcnology, Bhopal. Graduating in 2025 . I have solved over 1400+ DSA(Data Structures and Algorithms) problems on  GeeksforGeeks, Leetcode and CodingNinjas.I have worked on technologies like C++, JavaScript, HTML, CSS, React.js,Node.js  MongoDB, Express.js, Tailwind CSS, Bootstrap, SQL, MySQL during my bachelor's.
          <br></br>
        </p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-rose-600 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-rose-600 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
