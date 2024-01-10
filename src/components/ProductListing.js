import DetailPage from "../routing/DetailPage";

const ProductListing = () => {

    const sportProductInfo = [
        {product : "VTT", 
        category: "Cyclisme",
        description : "Le vélo tout-terrain1, souvent abrégé en VTT, parfois appelé vélo de montagne2 par traduction de l'anglais mountain bike, est un vélo destiné à une utilisation sur terrain accidenté, hors des routes goudronnées. Il sert pour diverses activités de loisirs individuelles et collectives ainsi que pour des pratiques sportives réglementées par l'Union cycliste internationale. Les pratiquants peuvent être nommés « vététistes », « enduristes » ou « pilotes » en fonction du type de pratique.",},

        {product : "Raquette", 
        category: "Tennis",
        description : "La raquetteÉcouter est un instrument utilisé pour pratiquer certains sports : tennis, tennis de table, badminton, padel et squash. Elle permet de renvoyer à l'adversaire une balle ou un volant1 . Elle se compose d'un manche qui permet de la tenir en main, et d\'un tamis qui sert à frapper la balle.",},

        {product : "Maillot de bain", 
        category: "Natation",
        description : "Le maillot de bain, ou le costume de bain en Suisse et au Canada1, est un vêtement destiné à cacher certaines parties du corps lors de la pratique de la natation, de la baignade, de la détente au bord de l'eau (plage, bronzage…) ou, plus généralement, lors de toute activité de plein air. ",},
    ]

    return  (
    <>
    {sportProductInfo.map(info => {
        return (
          <DetailPage 
            title={info.product} 
            username={info.category} 
            description={info.description} />
        );
      })}
    </>
    );

}

export default ProductListing;