function Card (props) { 
    let title = props.title 
    let src = props.src
    return (
        <div className="Card hover:animate-bounce">
            <img alt={title} src={src} className="w-[200px]"></img>
        </div>
    );
}

export default Card