import Card from "./Card";
import Pythonlogo from "../../imgs/python-logo.png"
import Javalogo from "../../imgs/java-logo-vector.png"
import JavaScriptlogo from "../../imgs/JavaScript-logo.png"
import Cpplogo from "../../imgs/cpp-logo.png"
import Htmlcsslogo from "../../imgs/htmlcss.png"
import Reactjslogo from "../../imgs/reactjs-icon.png"
import Electronjslogo from "../../imgs/electronjs-logo.png"
import Nodejslogo from "../../imgs/nodejs-logo.png"
import Tailwincsslogo from "../../imgs/Tailwind_CSS_Logo.svg.png"

function Skills (props) { 
    return (
        <div className="Skills pt-[10%] ">
            <h1 className="text-center text-slate-200 font-bold text-7xl backdrop-blur-3xl bg-[#21272c]/40">Skills</h1>
            <div className="grid grid-cols-5 gap-7 gap-y-[7%] pt-[5%] bg-[#21272c]/40">
                <Card title="Python" src={Pythonlogo}/>
                <Card title="Java" src={Javalogo}/>
                <Card title="JavaScript" src={JavaScriptlogo} />
                <Card title="C/C++" src={Cpplogo}/>
                <Card title="HTML/CSS" src={Htmlcsslogo}/>
                <Card title="ReactJS" src={Reactjslogo}/>
                <Card title="ElectronJS" src={Electronjslogo}/>
                <Card title="NodeJS" src={Nodejslogo}/>
                <Card title="TailWindCSS" src={Tailwincsslogo}/>
            </div>
        </div>
    );
}

export default Skills