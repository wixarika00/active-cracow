import React from 'react';
import './footer.css';
import Copyright from '../copyright/Copyright'

const elements = ["Terms & Conditions", "FAQ"];
// const items = [];

function Footer(props) {
    // for( let [index, value] of elements.entries()) {
    //     items.push(<li>{value}</li>);
    //     console.log(items)
    // }
    // let isLogged = false;
    // let button;
    // if(isLogged) {
    //     button = <button>Log out</button>
    // } else {
    //     button = <button>Log in</button>
    // }
    return (
        <div>
            <footer>
                <ul>
                    {elements.map((value, index) => {
                        return <li>{value}</li>
                        })}
                    <li>Contact: {props.contact.email}</li>
                </ul>
                <Copyright year="2020"/>
                {/* {button} */}
                {/* {isLogged === false &&
                <div>sprawdz poczte</div>}
                {isLogged
                ? <div>Zobacz poczte</div>
                :<div>ello</div>} */}
            </footer>
        </div>
    )
}

export default Footer;