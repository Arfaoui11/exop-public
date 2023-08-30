import "animate.css/animate.min.css";
import { Collapse, Typography } from "antd";
const { Paragraph, Title } = Typography;

const { Panel } = Collapse;

const invData = [
  {
    header:
      "Quand un investisseur non-résident peut bénéficier de la garantie de transfert au titre d’un investissement réalisé en Tunisie? ",
    text: "Tout investisseur non-résident bénéficie de la garantie de transfert automatiquement s’il remplit les deux conditions cumulatives suivantes :\n- L’investissement doit être réalisé dans le respect de la règlementation régissant l’activité dans laquelle il a investi ;\n- Le financement de l’investissement doit être fait au moyen d’une importation de devises matérialisée par l’établissement d’une fiche d’investissement digitale via la plateforme électronique hébergée sur le site de la Banque Centrale de Tunisie à l’adresse suivante : « fiche-invest.bct.gov.tn/FichInvest».\n\nLa garantie de transfert confère à l’investisseur non-résident le libre transfert des revenus liés à l’investissement tels que les dividendes, les jetons de présence, le produit de cession ou de liquidation de son investissement.\n\nLes modalités d’établissement de la fiche d’investissement ainsi que les procédures afférentes aux transferts des revenus d’investissement sont prévues par la circulaire N°2018-14 du 26 décembre 2018.",
    key: "1",
  },
  {
    header:
      "Est-ce qu’une personne non-résidente physique ou morale peut investir en Tunisie au moyen d’un apport autre qu’un apport en devises ",
    text: "Tout investisseur non-résident doit obligatoirement financer son investissement réalisé en Tunisie par importation de devises.Toutefois, des dérogations à cette règle sont accordées, au cas par cas, par la Banque Centrale de Tunisie lorsque le financement est assuré par apports en nature (équipements, machines) ou par conversion de créances commerciales ou financières détenues envers des résidents. Seule la conversion du principal au titre des avances en compte courant associés/actionnaires est libre sur le plan change, à condition qu’elle soit effectuée dans le respect de la circulaire n°2018-14 du 26 décembre 2018",
    key: "2",
  },
  {
    header:
      "Est-ce que la libération de la participation d’une personne physique résidente au capital de sociétés non résidentes établies en Tunisie peut s’effectuer librement?",
    text: "Les personnes physiques résidentes peuvent investir en Tunisie librement dans la limite de 34% au capital des sociétés établies en Tunisie et régulièrement créées sous le statut de non-résidente. Les modalités de libération de leurs participations se fait par achat de devises ou en dinars convertibles auprès d’un Intermédiaire Agrée (circulaire de la Banque Centrale de Tunisie n°2007-23 du 10 octobre 2007).",
    key: "3",
  },
  {
    header:
      "Est-ce qu’un non-résident de nationalité étrangère peut acquérir un bien immobilier en Tunisie?",
    text: " L’acquisition de biens immobiliers en Tunisie par des personnes physiques ou morales non-résidentes de nationalité étrangère est soumise à une autorisation préalable de la Banque Centrale de Tunisie, lorsque ladite acquisition porte sur :\n\n- un terrain ou un bâtiment situé en dehors d’une zone industrielle aménagée.\n- un terrain situé en dehors d’une zone touristique.\n\n Le financement de cette acquisition doit être effectué au moyen d’une importation de devises matérialisée par l’établissement d’une fiche d’investissement digitale via la Plateforme des Investissements en Devises des Non-Résients en Tunisie hébergée sur le site de la Banque Centrale de Tunisie à l’adresse suivante : « fiche-invest.bct.gov.tn/FichInvest ».",
    key: "4",
  },
  {
    header:
      "Est-ce qu’une personne non-résidente de nationalité étrangère peut acquérir un bien immobilier en Tunisie auprès d’une personne non-résidente de nationalité étrangère? ",
    text: "L’acquisition par une personne non-résidente de nationalité étrangère d’un bien immobilier en Tunisie auprès d’une personne non-résidente de nationalité étrangère doit être financée au moyen d’une importation de devises.Le règlement à l’étranger ou à travers un virement entre comptes étrangers ouverts auprès du secteur bancaire local du prix de cession doit requérir l’autorisation préalable de la Banque Centrale de Tunisie.",
    key: "5",
  },
];

const Declaration: React.FC = () => {
  return (
    <>
      <Collapse accordion className="accordion-faq">
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

export default Declaration;
