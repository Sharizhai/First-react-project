import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const DetailPage = () => {
    const {name} = useParams();

    return (
        <>
            <div>
                <Link className="return-link" to="/">Accueil</Link>
            </div>

            <br />

            <p>Ceci est la page de détail de la catégorie {name}</p>
        </>
    );
};

export default DetailPage;