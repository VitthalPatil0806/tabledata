import { NavLink } from "react-router-dom";

function Pages(){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/records">records</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Pages; 