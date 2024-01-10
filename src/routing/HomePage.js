import { Link } from 'react-router-dom';
import CategoryListing from "../components/CatListing";

const HomePage = () => {
    return (
        <>
            <div className='navbar'>
                <img className="navbar-brand" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" width="150" height="140" />
                <hr class="navbar-divider" />
                <h1 className='navbar-item'>HomePage</h1>
            </div>
            <br />
            <CategoryListing />
        </>
    );
};

export default HomePage;