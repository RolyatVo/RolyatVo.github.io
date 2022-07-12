function Icon (props) { 
    let logo = props.name 


    switch (logo) { 
        case "Home": 
            return <i class="fa-solid fa-house"></i>
        case "About": 
            return <i class="fa-solid fa-user"></i>
        case "Contact":
            return <i class="fa-solid fa-address-book"></i>
        case "Work Experience": 
            return <i class="fa-solid fa-briefcase"></i>
        case "Projects": 
            return <i class="fa-solid fa-diagram-project"></i>
        default: 
            return null
    }

}

export default Icon