import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailPage = ({product, category, description}) => {
    const {name} = useParams();

    return (
        <>
            <div>
                <Link className="return-link" to="/">Accueil</Link>
            </div>

            <br />

            <h1>Catégorie {name}</h1>

            <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{product}</p>
        <p className="subtitle is-6">{category}</p>
      </div>
    </div>

    <div className="content">{description}
      <br />
    </div>
  </div>
</div>
        </>
    );
};

export default DetailPage;