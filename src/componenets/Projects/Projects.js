import PCard from "./PCard";
import CXMimage from "../../imgs/CXM_screenshot.png"
import Infalterimage from "../../imgs/Inflater.png"
import Cimage from "../../imgs/cimage.png"
import Final320 from "../../imgs/bg2.png"
import LotsofYou from "../../imgs/ThereArelotsofyou.png"
import Nomadicunit from "../../imgs/unit.JPG"


function Projects (props) { 
    return (
        <div>
            <div className="flex justify-center text-4xl font-bold text-white pt-[3%] ">Most Recent Works</div>
            <div className="flex justify-center pt-[2%] pb-[10%]">
                <div className="grid grid-cols-3 gap-[5rem]">
                    <PCard 
                        link="https://github.com/Coffeemancer99/Nomadic-Unit" 
                        title="Nomadic Unit" 
                        isProject={true}
                        src={Nomadicunit}
                        desc="Worked closely with Mircosoft Airband team to develop data aquisition software for a remote command center for rural emgergency services. Uses Azure to store all data collected from sensors and to remotely control the unit. There is a website app that utilizes APIs from CosmosDB by Azure."
                        />
                    <PCard 
                        link="https://github.com/ehlong/CXM" 
                        title="Customer Experience Management"
                        isProject={false}
                        src={CXMimage}
                        desc="A desktop application that is built with ElectronJS."
                        /> 
                    <PCard 
                        link="https://github.com/RolyatVo/Inflater"
                        title="Inflater" 
                        isProject={false}
                        src={Infalterimage}
                        desc="Java video game that is built with Slick2D and is inspired by Dig Dug and classic Lode Runner. The game is a 2D platformer where you collect all the coins in each level to unlock hidden doors that lead to the next level."
                        /> 
                    <PCard 
                        link="https://github.com/RolyatVo/ThereAreLotsOfYou" 
                        title="ThereAreLotsofYou" 
                        isProject={false}
                        src={LotsofYou}
                        desc="A networked 3D third-person Battle Royale java video game that's built with Slick2D. Players collect items to become stronger and survive until there is only one standing!"
                        /> 
                    <PCard 
                        link="https://github.com/RolyatVo/Simple-Client-Server-TCP-Socket"
                        isProject={false}
                        title="Minimal Master File Table System"
                        src={Cimage}
                        desc="A client and server program that utilizes Unix TCP/IP sockets to communicate with each other across a network. Client program interacts with server to navigate and/or download files to/from the server."
                        /> 
                    <PCard 
                        link="https://github.com/CyanPhoenix51/CS320-FP" 
                        isProject={false}
                        title="Graph Theorist' Sketchpad" 
                        src={Final320}
                        desc="A web application that's built with ReactJS and Firebase. This application allows users to quickly create mathematical graphs and displays helpful information about the graphs they created."
                        /> 

                </div>
            </div>
        </div>
        ); 
}


export default Projects