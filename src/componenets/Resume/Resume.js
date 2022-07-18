import Resumepng from "../../imgs/Taylor_Vo_s_Resume-1.png"
import Resumepdf from "../../imgs/Taylor_Vo_s_Resume.pdf"
function Resume (props) { 
    return ( 
        <div className="Resume px-[20%] flex justify-center pb-[5%]">
            <a download={Resumepdf} href={Resumepdf} className="">
                <img alt="resume" className="h-[1200px] pt-5" src={Resumepng}>
                </img>
            </a>
        </div>
        ); 
}


export default Resume