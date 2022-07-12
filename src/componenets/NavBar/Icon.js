function Icon (props) { 
    let logo = props.name 


    switch (logo) { 
        case "Home": 
            return <i className="fa-solid fa-house bg-transparent"></i>
        case "About": 
            return <i className="fa-solid fa-user bg-transparent"></i>
        case "Contact":
            return <i className="fa-solid fa-address-book bg-transparent"></i>
        case "Work Experience": 
            return <i className="fa-solid fa-briefcase bg-transparent"></i>
        case "Projects": 
            return <i className="fa-solid fa-diagram-project bg-transparent"></i>
        default: 
            return null
    }

}

export default Icon