import "./LoadingScreen.modules.css"
import { Link } from "react-router-dom";

const LoadingScreen = () => {
    return (
        <>
            <div className="bodyLoading">
                <h1 className="loadingText">Loading...</h1>
                <img src="https://media.tenor.com/lwA7B8RlkZAAAAAi/t90a-spin.gif" alt="Loading..." />
            </div>
        </>
    )
}

export default LoadingScreen;