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
        <div className='about-section bg-[#21272c]/40'>
            <div className='about-paragraphs font-serif pt-10 text-2xl mx-5 font-semibold text-slate-300 w-[100%] leading-relaxed text-left'>
                <p>Hello! First off, I want to thank you for your time visiting my website!<br></br></p><br></br>
                <p>
                    I'm a very ambitious college graduate looking for my first job in an established software company. I'm hoping to learn and to work on the latest technologies that can help everyone.
                    I built this website to show you what I can do and how much I enjoy doing it!
                </p>
                <p> 
                    In 2017, I wondered what I want to do in my career. I knew that I loved to have a good understanding of problems and make creative solutions for them. Asking around and looking through the web, this is where I stumbled across Computer Science. Since then, I have enojyed everything I learned in the vast field of CS.
                </p>
                <br></br>
                <br></br>
                <p>
                    I'm still learning everyday, there is so many awesome and valuable technologies out there that it's hard to choose! Whether it's learning a brand new tech stack, a new langauge, creating/building apps, or just fixing a known issue to make everything work. I want to be a valueable software engineer/developer and fill the role of my future employer with the skills I have.
                </p>
                <br></br>
                <p>
                    On a personal side, I love to bowling and riding my motorcycle whenever I can. Nothing beats having fun with friends and family, or feeling the adrenaline riding through curves!
                </p>
            </div>
        </div>
        <Skills/>
        <Tools/>

        </div>
        </>
        ); 
}


export default About