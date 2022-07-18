import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
function PCard (props) { 
    let title = props.title !== "" ? props.title : "Project heading";
    let desc = props.desc !=="" ? props.desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
    return (
        <Card className="shadow-lg shadow-black p-3 transition ease-in-out delay-100hover:-translate-y-1 hover:scale-110 backdrop-blur-3xl bg-[#21272c]/40" style={{ width: '24rem' }}>
            <div className="flex justify-center">
                <Card.Img className="max-h-[15rem] "variant="top" src={props.src} />
            </div>
            <Card.Body>
                <Card.Title className="flex justify-center font-bold text-[1.25rem] text-white pt-2">{title}</Card.Title>
                <Card.Subtitle className="flex justify-center text-slate-200">{!props.isProject? "Project" : "Work"}</Card.Subtitle> 
                <Card.Text className="text-slate-300 ">{desc}</Card.Text>
                <div className="flex justify-center pt-4">
                    <Button className=" bg-blue-500 hover:bg-blue-300 text-black rounded-sm p-1 m-0.25" href={props.link} variant="primary"> <i class="fa-brands fa-github bg-transparent"></i>Github</Button>
                </div>
            </Card.Body>
      </Card>
    );


} 


export default PCard; 