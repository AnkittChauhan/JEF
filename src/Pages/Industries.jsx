import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import MainFooter from "../Components/Footer/MainFooter";

function Industries() {

  const serviceData = [
    {
      number: './SerivePage/01.png',
      title: 'Comprehensive Lightning Protection & Grounding Solutions',
      description: `We provide end- to-end services from system design to installation, ensuring your renewable energy facility is fully protected against electrical hazards. Lightning strikes and power surges can cause significant damage to solar farms or wind turbines, leading to costly downtimes. JEF's protection systems are tailored to withstand the harsh environmental conditions of the Middle East, ensuring optimal performance.`
    },
    {
      number: './SerivePage/02.png',
      title: 'Design and Detailed Engineering',
      description: `Our team of experts provides meticulous design and engineering services that comply with international standards such as IEC 62305 and local regulations. Whether it's solar PV, battery energy storage systems (BESS), or wind farms, our detailed engineering ensures efficient integration with the grid, reducing the risk of power quality issues.`
    },
    {
      number: './SerivePage/03.png',
      title: 'Adequacy Study & Root Cause Analysis (RCA)',
      description: 'Our Adequacy Study identifies gaps in your current systems, ensuring compliance and operational efficiency. The Root Cause Analysis addresses potential weaknesses and offers long-term solutions to avoid future disruptions.'
    }
  ];

  // ContactUs Section

  const inputFields = [
    { label: 'Name', type: 'text' },
    { label: 'Email', type: 'email' },
    { label: 'Mobile Number', type: 'tel' },
  ];

  function FormInput({ label, type }) {
    const id = label.toLowerCase().replace(' ', '-');
  
    return (
      <div className="mb-6">
        <label htmlFor={id} className="sr-only">{label}</label>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={label}
          className="overflow-hidden px-5 py-3.5 w-full max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
          required
        />
      </div>
    );
  }

  return (
   <>
    < Navbar />
    <section className="flex h-screen overflow-hidden flex-col 2xl:text-7xl text-4xl font-bold lg:text-5xl xl:text-6xl tracking-wider text-white ">
        <div className="flex flex-col h-screen relative max-md:text-4xl">
            <div className="relative">
            <img
                loading="lazy"
                src="./IndustriesPage/IndustriesMainImg.png"
                alt="Renewable Energy Industry background"
                className="object-cover h-screen w-screen"
            />
            <h1 className="absolute inset-0 p-4 flex items-center justify-center z-10">
                RENEWABLE ENERGY INDUSTRY
            </h1>
            </div>
        </div>
    </section>

    {/* Navigated Section */}

        <section>
            < Navigation />
        </section>


    {/*  */}

    <section className="p-[5%]">
        <main className="flex flex-col text-center">
        <header className="flex flex-col w-full text-4xl font-semibold uppercase text-stone-900 tracking-[6.06px] max-md:max-w-full">
            <img
            loading="lazy"
            src="./IndustriesPage/WindmilLogo.png"
            alt="Renewable Energy Industry Logo"
            className="object-cover self-center max-w-full aspect-square w-[150px]"
            />
            <h1 className="mt-16 w-full font-medium max-md:mt-10 max-md:max-w-full">
            Renewable Energy Industry
            </h1>
        </header>
        <section className="mt-12 text-lg p-2 md:text-xl lg:text-2xl md:w-[80%] lg:w-[60%] self-center leading-10 text-zinc-900 max-md:mt-10 max-md:max-w-full">
            <p>
            The Middle East, particularly the{" "}
            <span className="font-semibold">UAE, Saudi Arabia, and Qatar</span>,
            has committed to ambitious renewable energy goals. The regions
            reliance on solar PV and wind energy has significantly increased,
            making{" "}
            <span className="font-semibold">
                renewable energy infrastructure
            </span>{" "}
            critical to national sustainability strategies. JEF is positioned as a
            key partner in this growth, offering state-of- the-art{" "}
            <span className="font-semibold">
                lightning protection, grounding solutions, and detailed engineering
                services
            </span>{" "}
            designed to ensure the operational continuity and safety of renewable
            energy projects.
            </p>
        </section>
        </main>
    </section>



    <section>
      < IntegratingDiverseSpecializations />
    </section>




    {/* Service Provided Section */}

    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-20 font-bold bg-stone-900 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1518px] max-md:max-w-full">
        <h2 className="self-start text-4xl leading-none text-red-700 uppercase max-md:max-w-full max-md:text-4xl">
          service provided
        </h2>
        <div className="flex flex-wrap gap-10 items-start mt-20 max-md:mt-10">
          {serviceData.map((service, index) => (
            <React.Fragment key={service.number}>
              <article className="flex flex-col pb-1.5 rounded-none min-w-[240px] w-[443px] max-md:max-w-full">
                <h3 className="self-start ">
                <img 
                src={service.number}  className="h-[2rem] lg:h-[3rem]"/>
                </h3>
                <h4 className="mt-6 text-2xl leading-8 text-red-700 max-md:max-w-full">
                  {service.title}
                </h4>
                <p className="mt-10 text-xl font-extralight leading-9 text-white max-md:mt-10 max-md:mr-2 max-md:max-w-full">
                  {service.description}
                </p>
              </article>
              {index < serviceData.length - 1 && (
                <div className="shrink-0 w-px border border-gray-400 h-[57vh] hidden md:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>




    <section className=" py-20">
    <main>
      <h1 className="text-5xl text-red-700 text-center font-semibold uppercase tracking-widest">Segments</h1>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fec8dd4c0faf600f3fdc9aa66a007a0646ef06fff1de8c883aa0da6ffda49ac6?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3"
        className="object-contain mt-16 w-full aspect-[7.3] max-md:mt-10 max-md:max-w-full"
        alt="Decorative image"
      />
    </main>
    </section>
    <section>
      
    </section>





    <section className="flex overflow-hidden flex-col text-base font-light  text-stone-300">
      <div className="flex relative flex-col justify-center items-start px-20 py-24 w-full min-h-[628px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img loading="lazy" src="./HomePageImg/ContactUsMainImg.png" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex lg:mx-[120px] relative flex-col items-start mb-0 max-w-full w-[521px] max-md:mb-2.5">
          <h1 className="text-5xl font-semibold text-red-700 uppercase tracking-[2px] max-md:text-4xl">
            Contact us
          </h1>
          <p className="self-stretch mt-4 text-lg font-normal leading-none text-white max-md:max-w-full">
          Get in touch with us for any business enquiry.
          </p>
          <form className="w-full mt-12 max-md:mt-10">
            {inputFields.map((field, index) => (
              <FormInput key={index} label={field.label} type={field.type} />
            ))}
            <button
              type="submit"
              className="overflow-hidden px-16 py-4 mt-2 max-w-full text-xl font-semibold text-white whitespace-nowrap bg-red-700 rounded-3xl w-[380px] max-md:px-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

    < MainFooter />

   </>
  );
}


const statistics = [
  { label: "340 SUCCESSFUL RENEWABLE ENERGY PROJECTS" },
  { label: "Ongoing Projects: 1.6 GW Wind 5.0 GW Solar PV" },
  { label: "Total Projects Capacity: 5.6 GW Wind | 8.1 GW Solar PV" }
];

function StatisticItem({ label, value }) {
  return (
    <div className="mt-6 tracking-widest uppercase max-md:max-w-full">
      {value && <span className="font-bold">{value}</span>} {label}
    </div>
  );
}

function IntegratingDiverseSpecializations() {
  return (
    <section className="flex overflow-hidden flex-col items-start py-28">
      <div className="w-screen max-md:max-w-full">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="./IndustriesPage/DiverseSpecializationsImg.png"
              alt="Illustration representing diverse specializations in electrical engineering"
              className="object-cover grow w-full aspect-[0.79] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex p-4 self-center items-center mx-auto flex-col w-[40%] max-md:w-full">
            <div className="flex flex-col items-center self-center mx-auto my-auto text-2xl leading-[50px] text-stone-900 max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start lg:text-4xl w-[90%] font-medium leading-relaxed tracking-widest text-red-700 uppercase max-md:max-w-full">
                Integrating Diverse Specializations for Value Delivery
              </h2>
              <p className="self-start lg:text-3xl leading-normal font-light w-[95%]  my-14  max-md:mt-10 max-md:max-w-full">
              The diverse specializations within our team ensure a multidimensional approach to problem
                solving, thereby positioning us as a competent and reliable service vendor partner in the
                electrical engineering space.
              </p>
              <h1 className="text-lg lg:text-2xl font-semibold">
                  {statistics.map((stat, index) => (
                    <StatisticItem key={index} label={stat.label} />
                  ))}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






const NavigationItem = ({ text, isActive }) => (
  <div className="flex items-center self-stretch my-auto">
    <div
      className={`self-stretch my-auto text-base tracking-wide leading-none uppercase ${
        isActive ? 'text-white' : 'text-red-700'
      }`}
    >
      {text}
    </div>
    {!isActive && (
      <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
        <div className="flex items-center w-[7px]">
          <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3113f381f331fdc6efbe3c0ae79c9bb98472ae04eaff8d3d44a215b51f8c5927?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              alt=""
              className="object-contain flex-1 w-full aspect-square"
            />
          </div>
        </div>
      </div>
    )}
  </div>
);

const navigationItems = [
  { text: 'HOME', isActive: false },
  { text: 'Our Business', isActive: false },
  { text: 'Industries', isActive: false },
  { text: 'Design and Construction', isActive: true },
];

const Navigation = () => (
  <nav className="flex flex-col justify-center items-start px-16 py-6 bg-stone-900 max-md:px-5">
    <div className="flex gap-y-2 flex-wrap items-center max-md:max-w-full">
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </div>
  </nav>
);



function Segments() {
  const circleData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <main className="flex flex-col">
      <header className="flex flex-col items-center self-center w-full text-5xl font-semibold leading-none text-center text-red-700 uppercase whitespace-nowrap max-w-[1440px] tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col max-w-full w-full max-md:text-4xl">
          <h1 className="flex justify-center items-center pr-80 pl-80 w-full max-md:px-5 max-md:max-w-full max-md:text-4xl">
            <span className="self-stretch pb-px my-auto min-w-[240px] max-md:text-4xl">
              segments
            </span>
          </h1>
        </div>
      </header>
      <section className="flex flex-col items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60d3095d932a1a9517b4f2c98596b1de71ee03ac13054f25f364cdd6655cc479?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
          alt="Segment illustration 1"
          className="object-contain max-w-full aspect-[6.54] w-[80%]"
        />
        <div className="flex justify-center items-center w-full max-md:max-w-full">
          {circleData.map((circle) => (
            <div key={circle.id} className="flex flex-col self-stretch pb-4 my-auto w-[222px]">
              <div
                className="flex aspect-square bg-zinc-800 min-h-[222px] rounded-[111px] w-[222px]"
                role="img"
                aria-label="Decorative circle"
              />
            </div>
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/832c1056efeb881fe308a0ffd1c7bde8861a713d47f9be83fcf097619944cd95?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
          alt="Segment illustration 2"
          className="object-contain max-w-full aspect-[6.54] w-[1552px]"
        />
      </section>
    </main>

  );
}


export default Industries;