import { Link } from "react-router-dom";
import "./LandingPage.modules.css"

const LandingPage = () => {
    return (
        <>
            <div className="bodyLanding">
                <h1 className="loadingText">Welcome</h1>
                <img src="https://media1.giphy.com/media/gtzMLa6KB4LAB1OIry/giphy.gif?cid=ecf05e47e75kkplxufyncl0ocggux4yqgk5hp4cscikoq82l&rid=giphy.gif&ct=g" />
                <Link to = {`/tanks`}>
                    <button className="enter-button" link="/tanks">Enter</button>
                </Link>
            </div>
        </>
    )
}

export default LandingPage;