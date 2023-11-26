import { useState } from "react";
function Header() {
    const [toggle, setToggle] = useState(false);
    const body = document.body;

    const hadleChange = () => {
        setToggle(!toggle);
        if (!toggle) {
            body.classList.add('dark-mode');
        }
        else {
            body.classList.remove('dark-mode');
        }
    }
    return (
        <header>
            <div className="container">
                <div className='logo'>
                    <h2>Social Media Dashboard</h2>
                    <p>Total Followers: 23,004</p>
                </div>
                <div className="theme-mode">
                    <p>{toggle ? 'Light Mode' : 'Dark Mode'}</p>
                    <div className="toggle-btn " onClick={hadleChange}>
                        <div className={toggle ? "toggle-btn__circle moved" : "toggle-btn__circle "}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;