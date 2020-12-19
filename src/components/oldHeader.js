import react from "react";

function Header({ name}) {
    return (
        <div >
            <div className='App-header'>
            <ul >
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li> Profile ({name})</li>
            </ul>

            </div>
        </div>
    )
}

export default Header;