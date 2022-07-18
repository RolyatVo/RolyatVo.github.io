import TypeAnimation from 'react-type-animation'
import Skills from './Skills';
import Tools from './Tools';
function About (props) { 
    return ( 
        <>
        <div className="About pl-[10%] pr-[10%] pt-[2%] z-[1] bg-transparent" >
            <TypeAnimation
                sequence={[
                    'About me', 2000,
                ]}
                wrapper="p"
                repeat={1}
                cursor={true}
                className="font-bold text-8xl text-center text-slate-200"
                />
        <div className='about-section backdrop-blur-3xl bg-[#21272c]/40'>
            <div className='about-paragraphs font-serif pt-10 text-2xl font-semibold text-slate-300 w-[100%] leading-relaxed text-center'>
                <p>I started programming in 2017 and loved it ever since<br></br></p><br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
                <br></br><br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
            </div>
        </div>
        <Skills/>
        <Tools/>

        </div>
        </>
        ); 
}


export default About