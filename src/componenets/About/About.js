import TypeAnimation from 'react-type-animation'
import Skills from './Skills';
import Tools from './Tools';
function About (props) { 
    return ( 
        <div className="About pl-[10%] pr-[10%] pt-[2%]" >
            <TypeAnimation
                sequence={[
                    'About me', 2000,
                ]}
                    wrapper="p"
                    repeat={1}
                    cursor={true}
                    className="font-bold text-8xl text-center text-slate-200"
            />
        <div className='about-section'>
            <div className='about-paragraphs font-serif pt-10 text-1xl text-slate-300 w-[45%] leading-relaxed'>
                <p1 className="">I started programming in 2017 and loved it ever since<br></br></p1><br></br>
                <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p1>
                <br></br><br></br>
                <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p1>
            </div>
        

        </div>
        <Skills/>
        <Tools/>

        </div>
        ); 
}


export default About