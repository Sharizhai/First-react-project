import { Link } from 'react-router-dom';

const CategoryListing = () => {

    const categories = [
        { id: 1, name: "Sport" },
        { id: 2, name: "Musique" },
        { id: 3, name: "Voyage" },
    ];

    const categoryLinks = categories.map(category => (
        <p>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
        </p>
      ))  

    return (
        <>
            {categoryLinks}
        </>
    );
};

export default CategoryListing;