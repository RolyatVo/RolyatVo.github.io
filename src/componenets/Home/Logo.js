import CLogo from "./computerlogo.svg"

function Logo (props) { 
    return (
        <div className="logo absolute right-[20%] top-[20%]">
            <img alt="pic" className="Logo-solid w-[800px]" src ={CLogo}>
            </img>
        </div> 
    ); 
}


export default Logo 