import Image from 'next/image';
import { Parallax, Background } from 'react-parallax';

const Hero = () => {
  return (
    <Parallax
    strength={500}
        bgImage="https://images.unsplash.com/photo-1510524813428-edec31e26317?auto=format&fit=crop&q=80&w=1473&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(250, 125, 0, ${percentage * 1})`,
                    left: '45%',
                    top: '50%',
                    width: percentage * 550,
                    height: percentage * 650,
                    // fontSize: percentage * 60,
                }}
            >
                <h1 className='text-5xl uppercase p-2 text-center font-thin text-gray-800'>Welcome to Venturer</h1>
                <p className='text-center font-thin text-gray-600 px-4'>Engaging your brain to write your memoirs can leave a recorded history for your descendants as it helps improve your cognitive fitness. As we grow older, there may be a tendency to feel less relevant to the people around us. We tend to withdraw as a result, and this isolation can lead to a greater risk of depression.</p>
                 </div>
        )}
    >
        <div className='h-[60vh] bg-[#0000002a]'></div>
    </Parallax>
  );
};

export default Hero;
// https://i.ibb.co/j81QLvZ/noaa-kcvlb727mn8-unsplash.jpg