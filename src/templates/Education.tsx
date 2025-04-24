import CardLink from '@/components/Cardlink';

const GrandmasterTalk = () => {
  return (
    <div className="bg-[#fafafa]">
      <section>
        <div
          className={`z-100 grid grid-cols-1 md:-translate-y-1/2 md:grid-cols-3 md:px-16`}
        >
          <CardLink
            image="/ed1.png"
            bgColor="bg-[rgba(235,35,88,0.9)]"
            title="SECTION MATERNELLE"
            subtitle="1ère à 3ème"
            link="#"
          />
          <CardLink
            image="/ed2.png"
            bgColor="bg-[rgba(245,140,4,0.9)]"
            title="SECTION PRIMAIRE"
            subtitle="1er à 6ème"
            link="#"
          />
          <CardLink
            image="/ed3.png"
            bgColor="bg-[rgba(74,217,217,0.9)]"
            title="SECTION SECONDAIRE"
            subtitle="7ème à Terminal"
            link="#"
            details={[
              {
                title: '1. Enseignement de base',
                items: ['7ème et 8ème'],
              },
              {
                title: '2. Enseignement général',
                items: [
                  'Option littéraire',
                  'Option scientifique',
                  'Option humanité pédagogique',
                ],
              },
              {
                title: '3. Enseignement technique',
                items: [
                  'Option commerciale et gestion',
                  'Option coupe et couture',
                  'Option mécanique générale',
                  'Option Électricité',
                  'Option Électronique',
                  'Option construction',
                  'Option mécanique automobile',
                ],
              },
            ]}
          />
        </div>
      </section>
      <section className="flex flex-col items-start gap-8 px-4 py-12 md:flex-row md:gap-[60px] md:px-8 lg:px-16  xl:px-24 2xl:px-32 ">
        {/* Texte principal */}
        <div className="md:w-[54%]">
          <h4 className="text-[18px] leading-[45px] tracking-wider text-[#818181]">
            Discours du grand maître
          </h4>
          <h1 className="mb-[20px] text-[28px] font-bold leading-[35px] tracking-wider text-[#303030] md:mb-[40px] md:text-[33px] md:leading-[45px] ">
            L&apos;ÉDUCATION EST L&apos;ARME LA PLUS PUISSANTE
          </h1>
          <p className="mb-[30px]  text-[14px] font-light leading-[22px] tracking-wider text-[#818181]">
            {`Nos élèves sont talentueux, travailleurs et pleins d'idées. 
              Nous les encourageons et leur donnons les moyens de concrétiser leurs idées. 
              Les opportunités pratiques sont notre priorité. Nos élèves s'investissent pleinement dans des projets qui comptent. 
              Découvrez les opportunités qui s'offrent à vous au college UFUNDI. 
              La mission de l'enseignant moderne n'est pas de raser les jungles, mais d'irriguer les déserts.`}
          </p>
          <div className="mb-[30px]">
            <img src="/signature.png" alt="Signature" />
          </div>
          <p className="text-[17px] font-[600] leading-4 tracking-[.1rem] text-[#303030]">
            Katherine Gonzalez
          </p>
          <p className="mt-[10px] text-[13px] font-light tracking-[.1rem] text-[#818181]">
            Sekolah Grandmaster
          </p>
        </div>

        <div className="grid w-full grid-cols-4  gap-1 md:w-[46%]">
          <img
            src="/ed1.png"
            alt="Student Writing"
            className="col-span-2 row-span-4 h-full "
          />

          <img
            src="/ed2.png"
            alt="Students Collaborating"
            className=" col-span-2 row-span-2 h-full "
          />
          <img
            src="/ed3.png"
            alt="Teacher in Class"
            className=" col-span-2 row-span-2 h-full "
          />
        </div>
      </section>
    </div>
  );
};

export default GrandmasterTalk;
