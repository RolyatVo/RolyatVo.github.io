import CLogo from "./home-logo.png"
// Taken from https://www.vecteezy.com
function Logo (props) { 
    return (
        <div className="logo w-[40%] absolute right-[20%] top-[20%] bg-transparent">
            <img alt="pic" className="Logo-solid w-full bg-transparent" src ={CLogo}>
            </img>
        </div> 
    ); 
}


export default Logo 