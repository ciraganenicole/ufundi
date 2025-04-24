import React, { useEffect, useState } from 'react';

const Achivement: React.FC = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    const experienceInterval = setInterval(() => {
      setExperience((prev) => (prev < 7 ? prev + 1 : 7));
    }, 1);

    const projectsInterval = setInterval(() => {
      setProjects((prev) => (prev < 80 ? prev + 1 : 80));
    }, 1);

    const technologiesInterval = setInterval(() => {
      setTechnologies((prev) => (prev < 4 ? prev + 1 : 4));
    }, 1);

    const commitsInterval = setInterval(() => {
      setCommits((prev) => (prev < 400 ? prev + 100 : 400));
    }, 1);

    return () => {
      clearInterval(experienceInterval);
      clearInterval(projectsInterval);
      clearInterval(technologiesInterval);
      clearInterval(commitsInterval);
    };
  }, []);
  return (
    <section
      className="relative w-full bg-cover bg-center py-[70px] text-white "
      style={{
        backgroundImage: 'url("/achivement.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(15,78,163,0.9)]"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-[30px] text-[26px] uppercase leading-[1.3636] tracking-wider md:mb-[70px]">
          NOS STATISTIQUES
        </h2>

        <section className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:gap-32">
          <div>
            <h2 className=" mb-[10px] text-[30px] font-[700] tracking-wider text-white md:mb-[20px]">
              {experience.toLocaleString('en-US')}
            </h2>
            <p className="text-[14px] font-[350] uppercase leading-3 tracking-wider text-white md:text-[16px]">
              Années d&apos;expérience
            </p>
          </div>
          <div>
            <h2 className="mb-[10px] text-[30px] font-[700] tracking-wider text-white md:mb-[20px]">
              {projects}
            </h2>
            <p className="text-[14px] font-[350] uppercase leading-3 tracking-wider text-white md:text-[16px]">
              Agents
            </p>
          </div>
          <div>
            <h2 className="mb-[10px] text-[30px] font-[700] tracking-wider text-white md:mb-[20px]">
              {technologies.toLocaleString('en-US')}
            </h2>
            <p className="text-[14px] font-[350] uppercase leading-3 tracking-widest text-white md:text-[16px]">
              Sections
            </p>
          </div>
          <div>
            <h2 className="mb-[10px] text-[30px] font-[700] tracking-wider text-white md:mb-[20px]">
              {commits}
            </h2>
            <p className="text-[14px] font-[350] uppercase leading-3 tracking-wider text-white md:text-[16px]">
              Elèves
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export { Achivement };
