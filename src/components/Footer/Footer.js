function Footer (props) {
    return (
        <div className="Footer fixed left-0 bottom-0 w-full h-12 flex justify-center">
            <div className="bg-black text-white font-bold font-6xl h-[50px] flex justify-around w-full">
                <div className="bg-transparent my-auto">Website created by Taylor Vo</div>
                <div className="flex justify-center my-auto gap-5">Socials 
                <a href="https://github.com/RolyatVo">
                <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/taylorvo2022/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:taylor.c.vo@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                </a>
                </div>
            </div>
        </div>
    );
}

export default Footer