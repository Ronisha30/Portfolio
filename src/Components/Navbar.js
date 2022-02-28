import"./Navbar.css";
export default function Navbar(props){
    console.log(props.links);
    return<div className='navbar'>
        {props.links.map(link =><h1 key={link}>
            {link} </h1>)}
    </div>
}