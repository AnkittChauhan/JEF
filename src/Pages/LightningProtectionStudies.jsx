import React, { useState, useEffect, useRef } from "react";
import MainImg from '../Components/MainImg/MainImg';
import MainFooter from '../Components/Footer/MainFooter';
import gsap from 'gsap';
import Navbar from "../Components/Navbar/Navbar";

const LightningProtectionStudies = () => {

  const services = [
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: './HomePageImg/WhatWeDoSection/Earthing Studies 2.png', text: 'Earthing studies' },
    { image: './HomePageImg/WhatWeDoSection/Lightning Protection 2.png', text: 'Lightning protection system studies' },
    { image: './HomePageImg/WhatWeDoSection/Power System Studies 2.png', text: 'Power system studies' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: './HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png', text: 'Power quality & root cause analysis' },
    { image: './HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png', text: 'Instrumentation earthing' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const serviceRefs = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      gsap.fromTo(img, 
        { opacity: 0 }, 
        { 
          opacity: 1, 
          duration: 2.5,
          ease: 'power2.inOut'
        }
      );
    }
  }, [imgRef]);

  const handleMouseEnter = (index, image) => {
    setHoveredIndex(index);
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setBackgroundImage('');
  };

  useEffect(() => {
    serviceRefs.current = serviceRefs.current.slice(0, services.length);
  }, [services]);

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === hoveredIndex && services[index]?.text !== '') {
          gsap.to(ref, { scale: 1.3, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.5 : 1,
            border: hoveredIndex !== null && services[index]?.text === '' ? '1px solid white' : '',
            backgroundColor: hoveredIndex !== null && services[index]?.text === '' ? 'transparent' : '',
            duration: 0.2,
            ease: 'power2.inOut'
          });
        }
      }
    });
  }, [hoveredIndex, services]);


      const navItems = [
        { label: 'HOME', isActive: true },
        { label: 'SERVICES', isActive: true },
        { label: 'EARTHING STUDIES', isActive: false },
      ];

      const [activeIndex, setActiveIndex] = useState(0);

      const handleClick = (index) => {
        setActiveIndex(index);
      };
    
      

      const components = [
        
  {
    imageSrc: './SerivePage/01.png',
    title: 'Risk Assessment',
    description: 'Using Risk Assessment Software to compare calculated risk against tolerable risk levels as per IEC 62305-2.',
  },
  {
    imageSrc: './SerivePage/02.png',
    title: 'Lightning Protection System (LPS) Design',
    description: 'Selecting from a choice of methods like the Rolling Sphere, Protection Angle, and Mesh Methods to design effective LPS.',
  },
  {
    imageSrc: './SerivePage/03.png',
    title: 'Surge Protection Devices (SPD):',
    description: 'Selecting Class I, II, and III SPDs at various levels of the electrical distribution system to protect against conducted surges.',
  },
  {
    imageSrc: './SerivePage/04.png',
    title: 'Additional Mitigation Techniques',
    description: 'Using equi-potential bonding, warning notices, and other best engineering practices to further reduce risk.',
  },
      ]

      const buttons = [
        { text: 'DISCOVER TOURISM', className: 'bg-red-700' },
        { text: 'DISCOVER NATURE', className: 'bg-red-700' }
      ];
    

  return (
   <>
    
    < Navbar />

    {/* Landing Img Section */}

    <section className="flex overflow-hidden h-screen flex-col bg-white">
      <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="./SerivePage/Lightning Protection 1.png"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 mx-40 max-w-full inset-y-2/3 max-md:mt-10 max-md:mb-2.5">
          <h1 className="text-7xl font-bold uppercase tracking-wider text-white max-md:max-w-full max-md:text-4xl">
          Lightning Protection Studies
          </h1>
          <div className="flex gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
            <button className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 min-h-[64px] min-w-[240px] rounded-[50px] w-[261px]">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>



    {/* Contact Us section */}



    <section className="flex overflow-hidden flex-col bg-stone-900">
      <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full" />
      <nav className="flex flex-col justify-center py-6 px-24 w-full bg-zinc-800 min-h-[64px] max-md:px-5 max-md:max-w-full">
        <div className="flex w-full max-md:max-w-full">
          <div className="flex items-center h-full min-w-[240px]">
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center self-stretch my-auto">
                <div className={`self-stretch my-auto text-base tracking-wide leading-none uppercase whitespace-nowrap ${item.isActive ? 'text-red-700' : 'text-neutral-300'}`}>
                  {item.label}
                </div>
                {item.isActive && (
                  <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
                    <div className="flex items-center w-[7px]">
                      <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98403646f26f29fd8d19e6e57b2e9f8b5de2f748795475a0d9039378b1786404?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-full aspect-square" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-end self-center px-80 mt-24 max-w-full min-h-[80px] w-[770px] max-md:px-5 max-md:mt-10">
        <img loading="lazy" src="./SerivePage/LighningLogo.png" alt="Earthing Studies Logo" className="object-contain w-20 aspect-square" />
      </div>
      <header className="flex flex-col items-center self-center mt-14 w-full text-2xl leading-9 text-center text-white max-w-[1391px] max-md:mt-10 max-md:max-w-full">
        <h1 className="flex flex-col max-w-full text-4xl font-medium uppercase leading-[60px] tracking-[6.06px] w-[1071px]">
          <div className="w-full max-md:max-w-full">
          Lightning Protection Studies and System Testing Services
          </div>
        </h1>
        <p className="self-stretch mt-12 font-light max-md:mt-10 max-md:max-w-full">
        JEF specializes in providing comprehensive Lightning Protection Studies to ensure the safety
          <br />
          and protection of your structures from lightning strikes. Our experienced team uses advanced
          <br />
          methodologies and standards to deliver effective lightning protection solutions as per IEC
          <br />
          standards for both existing and new structures.
        </p>
      </header>
      <div className="flex flex-col self-center mt-14 max-w-full text-base leading-6 text-center text-red-700 w-[770px] max-md:mt-10">
        <p className="px-56 w-full max-md:px-5 max-md:max-w-full">
          Get in touch for Real-Life Case Studies and Testimonials
        </p>
        <div className="flex mt-2.5 w-full min-h-[24px] max-md:max-w-full" />
      </div>
      <button className="flex gap-3.5 justify-center items-center self-center p-4 max-w-full text-sm tracking-wider leading-none text-center text-white uppercase border border-white border-solid rounded-[60px] w-[267px]">
        <span className="self-stretch my-auto">CONTACT US</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33562234bc92238f0281eafa23a9b3c49a837f5ae8d3662c67bc1d8b919e14?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </button>
    </section>

    

    {/* <section >
      <div className="overflow-hidden py-32 pl-20 w-full bg-stone-900 max-md:pt-24 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="mr-6 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow tracking-normal uppercase max-md:max-w-full">
                        <ul className="flex flex-col mx-auto justify-center space-y-5 max-w-full text-sm leading-6 text-gray-400 w-[70%] max-md:pl-5 max-md:ml-2.5">
                          {benefitItems.map((item, index) => (
                            <li
                              key={index}
                              className={`flex transition-all duration-300 ease-in-out items-start w-full rounded-xl cursor-pointer ${
                                activeIndex === index ? 'text-white text-2xl h-40' : 'h-auto text-base' 
                              }`}
                              onClick={() => handleClick(index)}
                            >
                              {activeIndex === index && (
                                <div className="bg-red-500 w-1 h-full mr-4"></div> 
                              )}
                              <div className={`w-[80%] min-w-[20%] ${activeIndex === index ? 'text-white' : 'text-gray-400'}`}>
                                {item}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                  </div>
                  <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start text-3xl text-red-700  max-md:max-w-full">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="Earthing/Grounding System Studies Icon" className="object-contain max-w-full aspect-[1.77] w-[124px]" />
                      <h2 className="mt-6 ml-5 w-[80%] tracking-[4.53px] font-light leading-[60px] uppercase max-md:max-w-full">
                        What is an earthing/ grounding system studies
                      </h2>
                       <div className="mt-3.5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                            <p className="mt-7 ml-5 text-2xl leading-9 tracking-widest text-white max-md:mt-10 max-md:max-w-full">
                              An Earthing/Grounding System Study involves evaluating the effectiveness and integrity of
                              both above and below ground connections in electrical installations. These studies help in 
                              pinpointing defective joints that can seriously affect the safety and performance of electrical
                              systems.
                            </p>
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                  
                </div>
              </div>

                   

            </div>
            
          </div>
          <div className=" ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center my-[6%] h-[30rem] max-md:mt-10 max-md:max-w-full">
              <img loading="lazy" src="./SerivePage/magna-discovery.jpg.png" alt="Earthing/Grounding System Illustration" className="object-contain w-full h-full aspect-[0.96] max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>

    </section> */}

    < VerticalCarousel />



    {/* <section className="flex lg:px-[100px] overflow-hidden flex-col items-start px-14 pt-16 pb-32 bg-black max-md:px-5 max-md:pb-24">
      <div className="flex flex-wrap gap-5 justify-between w-full  max-md:max-w-full">
        <h2 className="self-start text-4xl font-bold leading-none text-red-700 uppercase max-md:max-w-full">
          KEY COMPONENTS OF THE STUDY
        </h2>
        <div className="flex self-end flex-col min-h-[60px]">
          <div className="flex gap-5 items-start w-full max-w-[140px]">
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch p-5 my-auto w-full border border-white border-solid basis-0 min-h-[60px] rounded-[60px]">
                <button><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/150914823e04aa0b72d10dfe3eaaf22d38b599636111c8b7ad6e80476980a940?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-6 aspect-square" /></button>
              </div>
            </div>
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch px-5 my-auto bg-white border border-solid basis-0 border-zinc-900 border-opacity-10 h-[60px] min-h-[60px] rounded-[60px] w-[60px]">
                <button></button><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcda9453f93d58b48e207cfd8d3b19c69b7c4768fd9e522cbaaea6950c4e4b3?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-6 aspect-square" />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-center mt-48 w-full text-2xl max-md:mt-10">
      {components.map((component, index) => (
        <React.Fragment key={component.title}> 
          <div className="flex flex-col items-start mt-2.5 max-md:max-w-full">
            <div className="">
              <img src={component.imageSrc} alt={component.title} className="w-full h-auto" /> 
            </div>
            <h3 className="mt-8 font-normal leading-none text-red-700">{component.title}</h3>
            <p className="w-[45%] xl:w-[80%] lg:w-full mt-8 font-thin leading-8 text-gray-400 max-md:w-full">
              {component.description}
            </p>
          </div>
          {index < components.length - 1 && (
            <img src="./SerivePage/Line 14.png" alt="LineImg" className='mx-5' />
          )}
        </React.Fragment>
      ))}
    </div>
    </section> */}

      <section>
        < CarouselSection components={components} />
      </section>


      <section>
        <div className={` h-full bg-slate-900`}>
          <div 
            className=" w-full h-full py-20 mainSection bg-stone-900 overflow-hidden relative">
            {backgroundImage && (
              <div className="absolute inset-0 w-full h-full ">
                <img
                  ref={imgRef}
                  src={backgroundImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
            <section className="flex overflow-hidden flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
              <h2 className="self-center text-5xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                Our Services
              </h2>
              <div className="flex flex-wrap justify-center mt-20 max-md:mt-10 w-full h-[60vh]">
                <div className='flex items-center gap-x-10 circleChild'>
                  {services.slice(0, 9).map((service, index) => (
                    <ServiceItem
                      key={index}
                      text={service.text}
                      image={service.image}
                      ref={(el) => (serviceRefs.current[index] = el)}
                      onMouseEnter={() => handleMouseEnter(index, service.image)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
                <div className='flex gap-x-10'>
                  {services.slice(9).map((service, index) => (
                    <ServiceItem
                      key={index + 9}
                      text={service.text}
                      image={service.image}
                      ref={(el) => (serviceRefs.current[index + 9] = el)}
                      onMouseEnter={() => handleMouseEnter(index + 9, service.image)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
              </div>
            </section>
            </div>
        </div>
      </section>



    <section className="flex overflow-hidden flex-col text-center text-white w-full">
      <div className="flex overflow-hidden flex-col justify-center w-full h-[532px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
          <div className="flex relative flex-col justify-center items-center px-5 sm:px-10 md:px-20 py-20 w-full min-h-[532px]">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8e06a7d505c4129965e4c18c8e0cb8829849853aeb8e18090ea753ccccfdc6f?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" 
              alt="Background for testimonials section" 
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col max-w-full w-full md:w-[679px]">
              <h2 className="self-center text-base tracking-widest leading-snug">
                TESTIMONIALS
              </h2>
              <h3 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-widest max-md:max-w-full">
                WHAT OUR CUSTOMERS SAY
              </h3>
              <p className="mt-10 text-sm sm:text-lg font-thin leading-6 max-md:max-w-full">
                A new benchmark for sustainability in an area of outstanding natural beauty, Magna will
                be limited to 5% of the land for development. The region will protect, preserve and
                regenerate the landscapes in which it sits – and ensure the wildlife is returned to its past
                glory – for tourists, residents and guests to enjoy forever.
              </p>
              <div className="flex flex-wrap justify-center mt-10 max-w-full tracking-wider text-white uppercase w-full sm:w-[90%] md:w-[510px] mx-auto">
                {buttons.map((button, index) => (
                  <div key={index} className="flex flex-col flex-1 grow shrink-0 justify-center p-2.5 text-sm leading-none basis-0 min-h-[80px] w-fit">
                    <div className="flex items-center py-1 w-full max-w-[235px] min-h-[60px]">
                      <button className={`flex overflow-hidden justify-center items-center self-stretch px-5 sm:px-9 py-5 my-auto ${button.className} border border-solid border-zinc-800 border-opacity-10 min-h-[55px] rounded-[60px] w-full sm:w-[235px]`}>
                        <span className="self-stretch pb-px my-auto">
                          {button.text}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


 
    < MainFooter />
   </>
  )
}



const ServicesSection = () => {
  const services = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: 'Earthing studies' },
    { text: 'Lightning Protection System Studies' },
    { text: 'Power System Studies' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  const services1 = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: 'Power Quality &  Root cause Analysis' },
    { text: 'Instrumentation Earthing' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];

  return (
    <section className="flex overflow-hidden bg-stone-900 flex-col text-base leading-6 text-center text-white uppercase w-full">
      <h2 className="self-center text-5xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
        our services
      </h2>
      <div className="flex ml-[5%] flex-wrap justify-between mt-20 max-md:mt-10 w-full">
        {services.slice(0, 9).map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-md:mt-10">
        {services1.slice(0).map((service, index) => (
          <ServiceItem key={index + 5} {...service} />
        ))}
      </div>
    </section>
  );
};

const ServiceItem = React.forwardRef(({ text, onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
  ref={ref}
  className={`flex w-[13rem] h-[13rem] rounded-full items-center justify-center p-[1.5%] transition-all duration-300 
    ${text === "" ? "bg-stone-800" : "border border-solid hover:bg-red-600"}`}
  onMouseEnter={() => {
    if (text !== "") {
      onMouseEnter();
    }
  }}
  onMouseLeave={() => {
    if (text !== "") {
      onMouseLeave();
    }
  }}
>
  <span className="text-center">{text}</span>
</div>

  );
});


function CarouselSection({ components }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Number of visible cards at once
  const totalCards = components.length;

  // Function to handle the right click (move forward)
  const handleCarouselClickRight = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - visibleCards + totalCards) % totalCards;
    });
  };

  // Function to handle the left click (move backward)
  const handleCarouselClickLeft = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + visibleCards) % totalCards;
    });
  };

  return (
    <section className="flex lg:px-[100px] overflow-hidden flex-col items-start px-14 pt-16 pb-32 bg-black max-md:px-5 max-md:pb-24">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <h2 className="self-start text-4xl font-bold leading-none text-red-700 uppercase max-md:max-w-full">
          KEY COMPONENTS OF THE STUDY
        </h2>
        <div className="flex self-end flex-col min-h-[60px]">
          <div className="flex gap-5 items-start w-full max-w-[140px]">
            {/* Left Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickLeft}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch p-5 my-auto w-full border border-white border-solid basis-0 min-h-[60px] rounded-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/150914823e04aa0b72d10dfe3eaaf22d38b599636111c8b7ad6e80476980a940?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Left Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
            {/* Right Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickRight}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch px-5 my-auto bg-white border border-solid basis-0 border-zinc-900 border-opacity-10 h-[60px] min-h-[60px] rounded-[60px] w-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcda9453f93d58b48e207cfd8d3b19c69b7c4768fd9e522cbaaea6950c4e4b3?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Right Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-between items-center mt-36 w-full text-2xl max-md:mt-10 overflow-hidden">
        {/* Carousel wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            // Translate based on the currentIndex and the number of visible cards
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            width: `${(totalCards / visibleCards) * 100}%`, // Total width based on total cards and visible cards
          }}
        >
          {components.map((component, index) => (
            <React.Fragment key={component.title}>
              <div
                className="flex flex-col items-start  max-md:max-w-full"
                style={{
                  flex: `0 0 ${31}%`, // Make sure each card takes up exactly 1/3 of the carousel
                }}
              >
                {/* Each card */}
                <div className="">
                  <img src={component.imageSrc} alt={component.title} className="w-full h-auto" />
                </div>
                <h3 className="mt-8 xl:w-[75%] h-[5vh] font-normal leading-none text-red-700">
                  {component.title}
                </h3>
                <p className="w-[45%] xl:w-[77%] lg:w-full mt-8 right-0 font-thin leading-8 text-gray-400 max-md:w-full">
                  {component.description}
                </p>
              </div>
              {index < components.length - 1 && (
                <img
                  src="./SerivePage/Line 14.png"
                  alt="LineImg"
                  className="mr-16"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}






const VerticalCarousel = () => {
  const benefitItems = [
    "ABOUT Lightning Protection Study?",
    "What is a Lightning Protection Study?",
    "Importance of Lightning Protection Studies",
    "Our Approach to Lightning Protection Study Service",
    "Our Certifications and Expertise",
    "Detailed Study Reports and Analysis",
    "Benefits of Professional Lightning Protection Studies"
  ];

  const cardContents = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "What is a Lightning Protection Study?",
      description:
        "A Lightning Protection Study involves evaluating the adequacy and effectiveness of existing lightning protection systems. It includes risk assessment, system design and implementable protective measures to safeguard structures & equipment from lightning-induced damage.",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Importance of Lightning Protection Studies",
      description:
        `Proper lightning protection is crucial for:|Ensuring the safety of personnel and equipment by preventing lightning-related hazards.|Complying with international standards such as IEC 62305 and local regulations.|Reducing the risk of fire, equipment damage, and operational downtime.|Protecting critical infrastructure and maintaining service continuity.`,
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Importance of Lightning Protection Studies",
      description:
        `Proper lightning protection is crucial for:|Ensuring the safety of personnel and equipment by preventing lightning-related hazards.|Complying with international standards such as IEC 62305 and local regulations.|Reducing the risk of fire, equipment damage, and operational downtime.|Protecting critical infrastructure and maintaining service continuity.`,
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Our Approach to Lightning Protection Study Service",
      description:
        "At JEF, our Lightning Protection Studies encompass a range of key services:|Risk Assessment: Evaluating the risk of lightning strikes to determine the need for protection and the level of protection required.|System Design: Designing external and internal lightning protection systems based on the assessed risk and protection levels.|Implementation: One team will always have an eye &amp; ensure the designs recommended will be practically implementable at the specific site factoring in all possible constraints and special requirements.|Cost: Our solutions will be cost optimal and our BOQ will always reflect the most effective cost for a given project.",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Our Certifications and Expertise",
      description:
        `JEF’s team is certified and trained in the latest standards and practices, including:|IS/IEC 62305: Comprehensive guidelines for lightning protection, risk management, and system design.`,
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Detailed Study Reports and Analysis",
      description:
        `Our detailed reports include:|Comprehensive documentation of findings, measurements, and observations.|Summary of compliance with relevant standards and recommendations for
improvements.|Actionable insights for optimizing system safety and protection against lightning.`,
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Benefits of Professional Earthing/Grounding System Studies",
      description:
        "|Enhanced  Safety: Reducing the risk of lightning-related hazards and protecting personnel and equipment.|Operational Reliability:  Ensuring uninterrupted operations and protecting critical infrastructure.|Standards Compliance: Meeting international and local regulations for lightning protection systems.|Cost Savings: Preventing costly damage and downtime through effective lightning protection measures.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="overflow-hidden py-20 w-full bg-stone-900 max-md:pt-24 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left Side: Benefit Items */}
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <ul className="flex flex-col mx-auto justify-center space-y-5 max-w-full text-sm leading-6 text-gray-400 w-[70%] max-md:pl-5 max-md:ml-2.5">
              {benefitItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex transition-all duration-300 ease-in-out items-start w-full rounded-xl cursor-pointer ${
                    activeIndex === index
                      ? "text-white text-3xl h-56"
                      : "h-auto text-base"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {activeIndex === index && (
                    <div className="bg-red-500 w-1 h-full mr-4"></div>
                  )}
                  <div
                    className={`w-[80%] uppercase min-w-[20%] ${
                      activeIndex === index ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Vertical Carousel Content */}
          <div className="relative flex flex-col w-[56%] h-[86vh] overflow-hidden max-md:ml-0 max-md:w-full">
            <div
              className="absolute transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${(activeIndex * 100)/7}%)`}}
            >
              {cardContents.map((content, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start text-3xl text-red-700 h-screen max-md:max-w-full"
                  >
                    <img
                      loading="lazy"
                      src={content.imgSrc}
                      alt={content.title}
                      className="object-contain max-w-full aspect-[1.77] w-[124px] transition-opacity duration-500 ease-in-out"
                    />
                    <h2 className="mt-6 w-[80%] tracking-[4.53px] font-light leading-[60px] uppercase max-md:max-w-full">
                      {content.title}
                    </h2>
                    <div className="mt-3.5 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-full max-md:w-full">
                          {/* Splitting description by period and inserting line breaks with bullet */}
                          {content.description.split("|").map((sentence, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-2xl leading-9 tracking-widest text-white max-md:max-w-full">
                              {idx > 0 && "•"} {/* Add bullet point for new lines */}
                            </span>
                            <p className="ml-4 text-2xl font-light leading-9 tracking-widest text-white max-md:max-w-full">
                              {["Enhanced Safety:", "Operational Reliability:", "Standards Compliance:", "Cost Savings:"].includes(sentence.trim())
                                ? (
                                  <span className="text-red-500 !important">{sentence.trim()}</span> // Add the color red forcibly
                                ) : (
                                  sentence.trim() // Render the rest of the text as normal
                                )}
                            </p>



                          </div>
                        ))}



                        </div>
                      </div>
                    </div>
                  </div>
                ))}

            </div>
          </div>

          {/* Additional Image Section */}
          <div className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center my-[6%] max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="./SerivePage/magna-discovery.jpg.png"
                alt="Earthing/Grounding System Illustration"
                className="object-cover w-full h-full aspect-[0.96] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};











export default LightningProtectionStudies