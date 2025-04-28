function Card (props) { 
    let title = props.title 
    let src = props.src
    return (
        <div className="Card animate-pulse hover:animate-bounce shadow-2xl shadow-black cursor-fancy bg-[#242a30]">
            <img alt={title} title={title} src={src} className="h-[200px] ml-auto mr-auto py-[5%] bg-transparent"></img>
        </div>
    );
}

export default Card