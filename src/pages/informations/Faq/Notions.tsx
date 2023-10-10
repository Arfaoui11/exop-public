import "animate.css/animate.min.css";
import { Collapse, Typography } from "antd";
const { Paragraph, Title } = Typography;

const { Panel } = Collapse;

const invData = [
  {
    header:
      "Quand peut-on considérer qu’une personne physique tunisienne a perdu son statut de résident et intégrer celui de non-résident ?",
    text: "Pour considérer qu’une personne physique tunisienne a perdu son statut de résident et intégrer celui de non-résident, l’Avis de change n°3 retient deux éléments :\n- La domiciliation à l’étranger depuis plus de deux ans.\n- Et la possession à l’étranger de la personne concernée de son centre d’activité, c-à-d, le lieu où elle exerce ses activités lucratives et d’où elle tire ses revenus et ressources",
    key: "1",
  },
  {
    header:
      "Quels sont les faits générateurs à l’origine du changement du statut des sociétés établies en Tunisie de résidentes à non-résidentes et de non-résidentes en résidentes? ",
    text: "Tout changement qui touche le régime d’activité de ces sociétés de totalement exportatrice à non totalement exportatrice (et vice versa) et/ou la structure du capital suite à une opération d’acquisition de titres ou d’augmentation ou de réduction de capital de nature à augmenter ou à réduire la part de 66% détenu par des non-résidents, entrainant un changement du statut de ces sociétés de non-résidentes à résidentes et vice versa est soumis à une autorisation préalable de la Banque Centrale de Tunisie (Circulaire N°2007-23 du 10 octobre 2007).",
    key: "2",
  },
  {
    header:
      "Est-ce que les règlements entre résidents peuvent s'effectuer en Tunisie en devises? ",
    text: "Est prohibé, sauf dérogation de la Banque Centrale de Tunisie après avis du Ministre des Finances, le fait pour un résident de contracter envers un autre résident, une obligation libellée en une monnaie autre que le dinar tunisien.\nLe dinar doit être à la fois une monnaie de compte et une monnaie de règlement.",
    key: "3",
  },
  {
    header:
      "Est-ce qu’une personne physique résidente peut ouvrir un compte en devises en Tunisie ?  ",
    text: "Les personnes physiques résidentes peuvent ouvrir des comptes en devises ou en dinars convertibles Comptes Personnes Physiques Résidentes PPR conformément à la circulaire N°2017-04 du 23 juin 2017 pour y loger les revenus énumérés dans le cadre de ladite circulaire. Toutefois, les disponibilités logées dans ces comptes ne peuvent, en aucun cas, alimenter des comptes à ouvrir à l’étranger, aux noms des titulaires résidents",
    key: "4",
  },
];

const Notions: React.FC = () => {
  return (
    <>
      <Collapse accordion className="accordion-faq1">
        {invData.map((invItems, index) => (
          <>
            <Panel header={invItems.header} key={invItems.key}>
              <p>{invItems.text}</p>
            </Panel>
          </>
        ))}
      </Collapse>
    </>
  );
};

export default Notions;
