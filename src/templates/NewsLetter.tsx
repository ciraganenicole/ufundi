const parters = [
  {
    name: 'sponsor1',
    img: '/sponsor-logo-1.png',
  },
  {
    name: 'vick',
    img: '/sponsor-logo-2.png',
  },
  {
    name: 'vick',
    img: '/sponsor-logo-3.png',
  },
  {
    name: 'vick',
    img: '/sponsor-logo-4.png',
  },
];

export default function Newsletter() {
  return (
    <div className="mb-16 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="flex flex-col items-center justify-between gap-8 py-16 md:flex-row">
        {parters.map((parter) => (
          <img
            key={parter.name}
            src={parter.img}
            alt={parter.name}
            className=""
          />
        ))}
      </div>

      {/* Section Newsletter */}
      <div
        className="relative flex items-center bg-cover px-[15px] py-[40px]"
        style={{
          backgroundImage: 'url("newsletter-bg.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-[rgba(15,78,163,0.9)]"></div>
        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <div className="w-full text-center md:w-[50%] md:text-left">
            <h2 className="text-[24px] font-[700] leading-[22px] tracking-[.1rem] text-[#fafafa]">
              Recevez les dernières nouvelles du college UFUNDI!
            </h2>
            <p className="tranking-wider mt-5 text-[20px] font-light leading-[20px] text-[#fafafa]">
              Rejoignez notre newsletter maintenant
            </p>
          </div>

          <div className="flex w-full flex-col md:w-auto md:flex-row">
            <input
              type="email"
              placeholder="Entrez votre adresse e-mail ici"
              className="mt-[15px] w-full rounded px-[30px]   py-[20px] text-[17px] font-light leading-[16px] focus:outline-none md:mt-0 md:w-3/5"
            />
            <button className="mt-[20px] w-full rounded border-b-4 border-[#e19721] bg-[#f5ab35] px-8 py-3  text-[20px] text-white md:ml-4 md:mt-0 md:w-auto">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
