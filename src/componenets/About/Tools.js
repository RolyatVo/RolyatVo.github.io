import Card from "./Card";
import Codelogo from "../../imgs/vscodelogo.png"
import Linuxlogo from "../../imgs/LINUX-LOGO.png"
import MacOSlogo from "../../imgs/macoslogo.png"
import Gitlogo from "../../imgs/gitlogo.png"
import Intelijlogo from "../../imgs/intelijlogo.png"

function Tools (props) { 
    return (
        <div className="Tools pt-[10%] pb-[10%] backdrop-blur-3xl bg-[#21272c]/40">
            <h1 className="text-center text-slate-200 font-bold text-7xl">Tools</h1>
            <div className="grid grid-cols-5 gap-7 gap-y-[7%] pt-[5%]">
                <Card title="VS Code" src={Codelogo}/> 
                <Card title="Linux" src={Linuxlogo}/>
                <Card title="MacOS" src={MacOSlogo}/>
                <Card title="Git" src={Gitlogo}/>
                <Card title="InteliJ" src={Intelijlogo}/>
            </div>
        </div>
    );  
}


export default Tools