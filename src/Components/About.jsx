import React from 'react';
import Carousel from './Carousel';

const About = () => {
  return (
    <div className='w-container m-auto h-auto pb-20 z-50'>
      <div className='h-screen w-full pt-28'>
        <h1 className='uppercase text-8xl font-bold'>We are everythink</h1>
        <p className='w-[90%] mt-20 m-auto text-3xl'>
        At the heart of our approach are three core values: knowledge, integrity, and honesty. We are dedicated to leveraging our expertise to enhance every project we undertake, ensuring that our solutions are both effective and innovative. Our commitment to integrity means that we operate transparently and responsibly, building trust with our clients through honest communication and ethical practices. By focusing on these principles, we aim to create meaningful impacts and drive long-term success for those we serve. Our goal is not only to achieve exceptional results but also to cultivate enduring relationships founded on mutual respect and shared objectives.
        </p>
      </div>

      <div className='w-full'>
        <Carousel/>
      </div>

      <div className='pt-28'>
        <h1 className='uppercase text-8xl font-bold'>We are everythink</h1>
        <div className='w-[90%] m-auto mt-20 h-auto flex  flex-wrap'>
            <div className='w-1/2  pl-10 h-[35vh] '>
                <h1 className='text-3xl font-semibold'>CUSTOMISED MERCHANDISE</h1>
                <p className='w-[90%] mt-5 text-2xl'>Transform your brand with our customized merchandise! We design unique, high-quality products tailored to your needs, perfect for events, giveaways, and corporate gifts. Make your message unforgettable and impactful!</p>
            </div>
            <div className='w-1/2  pl-10 h-[35vh] '>
                <h1 className='text-3xl font-semibold'>BRANDING</h1>
                <p className='w-[90%] mt-5 text-2xl'>Elevate your business with our expert branding services! We create memorable and impactful brand identities that resonate with your audience, setting you apart from the competition and ensuring long-term success.</p>
            </div>
            <div className='w-1/2  pl-10 h-[35vh] '>
                <h1 className='text-3xl font-semibold'>CORPORATE GIFTS</h1>
                <p className='w-[90%] mt-5 text-2xl'>Impress your clients and team with our premium corporate gifts! Our curated selection of thoughtful, high-quality items enhances your brand's image and fosters lasting relationships. Make every gesture count with elegance and style.</p>
            </div>
            <div className='w-1/2  pl-10 h-[35vh] '>
                <h1 className='text-3xl font-semibold'>WEBSITE DESIGN</h1>
                <p className='w-[90%] mt-5 text-2xl'>Revitalize your digital footprint with our cutting-edge website design services. We build sleek, responsive websites that not only look impressive but also offer seamless user experiences, elevating your brand's online presence.</p>
            </div>
            <div className='w-1/2  pl-10 h-[35vh] '>
                <h1 className='text-3xl font-semibold'>ART</h1>
                <p className='w-[90%] mt-5 text-2xl'>Immerse yourself in creativity with our art services! We specialize in captivating film posters and stunning digital artworks that bring your vision to life. Elevate your project with unique, professional designs that make a statement.</p>
            </div>
            <div className='w-1/2  pl-10 h-[35vh] '>
                <h1 className='text-3xl font-semibold'>TECHNOLOGY</h1>
                <p className='w-[90%] mt-5 text-2xl'>Harness the power of innovation with our technology solutions! We deliver cutting-edge tech that drives efficiency and growth, offering custom solutions tailored to your needs. Transform your operations and stay ahead of the curve.</p>
            </div>
            

        </div>
      </div>
    </div>
  );
}

export default About;
