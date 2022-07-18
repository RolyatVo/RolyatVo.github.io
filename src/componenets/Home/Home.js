import TypeAnimation from 'react-type-animation'
import Logo from "./Logo"

function Home (props) { 
    return (
        <>
        <div className="home-page-container flex-auto">
            <div className="h-max w-max absolute left-[8%] top-[20%]">
                <h1 className="text-8xl font-bold text-slate-200 leading-normal">Hey! 👋<br></br> I'm Taylor Vo</h1>

                <TypeAnimation
                    sequence={[
                    'Bowler 🎳', 2000,
                    'Recent College Graduate  🎓', 2000, 
                    'Programmer 💻', 2000,
                    'Aspiring Full-Stack Engineer 🧰', 2000,
                    'Looking for Job Opportunities!', 2000,

                ]}
                    wrapper="p"
                    repeat={Infinity}
                    className="font-bold text-slate-400 text-3xl"
                /> 
            </div>
            <Logo/> 
        </div> 
        </> 
        ); 
}


export default Home