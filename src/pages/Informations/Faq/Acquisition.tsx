import "animate.css/animate.min.css";
import { Collapse, Typography } from "antd";
const { Paragraph, Title } = Typography;

const { Panel } = Collapse;

const invData = [
  {
    header:
      "Les personnes physiques de nationalité tunisienne transférant leur résidence habituelle de l’étranger en Tunisie sont-elles tenues de déclarer et de rapatrier leurs avoirs constitués régulièrement à l’étranger?",
    text: "Aux termes du Décret-loi N° 2011-98 du 24 Octobre 2011, les personnes physiques de nationalité tunisienne transférant leur résidence habituelle de l’étranger en Tunisie ont été formellement dispensées de l’obligation de déclarer et de rapatrier en Tunisie leurs avoirs constitués régulièrement à l’étranger, à la date du changement de leur résidence.",
    key: "1",
  },
  {
    header:
      "Quelles sont les opérations que les personnes physiques non-résidentes de nationalité tunisienne peuvent effectuer librement sous le statut de « résident »?",
    text: "Les personnes physiques non-résidentes de nationalité tunisienne peuvent bénéficier, en matière de règlementation des changes, du statut de résident et des droits qui y résultent. Elles sont en droit d’accomplir les opérations suivantes, sans requérir l’autorisation préalable de la Banque Centrale de Tunisie :\n- acquisition ou cession de biens immeubles, de droits immobiliers ou de fonds de commerce situés en Tunisie ;\n- acquisition ou cession de valeurs mobilières ou de parts sociales tunisiennes ;\n- conclusion de contrats de crédits en dinars et ouverture de comptes intérieurs en dinars :\n- gestion de leurs biens et de leurs affaires en Tunisie et accomplissement de toutes activités y afférentes y compris la conclusion et la réalisation de contrats, l’obtention et l’octroi d’hypothèques immobilières et tous gages et nantissements.\n\nLe tunisien non-résident bénéficie également de la garantie de transfert, prévue par l’article 1er du Code des Changes et du Commerce Extérieur, à la double condition que le financement de l’investissement en question soit assuré par une importation de devises, dûment justifiée et qu’il conserve la qualité de non résident, au regard de la règlementation de changes.",
    key: "2",
  },
  {
    header:
      "Les travailleurs tunisiens à l’étranger peuvent-ils se faire ouvrir en Tunisie des « comptes bancaires en dinars convertibles » avant d’acquérir le statut de « non-résident » ?",
    text: "Les personnes physiques de nationalité tunisienne, justifiant d’une situation professionnelle régulière dans un pays étranger par la production d’une attestation datant de moins de 3 mois, délivrée par les autorités consulaires tunisiennes, peuvent se faire ouvrir auprès des Intermédiaires Agrées tunisiens un compte étranger en dinars convertibles, sur présentation d’une pièce justificative adéquate (carte de séjour ou de travail à l’étranger, cours de validité, copie du passeport comportant des visas indiquant un séjour continu à l’étranger, une nouvelle attestation consulaire), conformément à la circulaire du 14 janvier 1975 relative à l’ouverture des comptes étrangers en dinars convertibles des travailleurs tunisiens à l’étranger.",
    key: "3",
  },
  {
    header:
      "Quels sont les comptes bancaires que les personnes physiques non-résidentes de nationalité tunisienne transférant leur résidence habituelle de l’étranger en Tunisie peuvent ouvrir en Tunisie ?",
    text: "Les personnes physiques de nationalité tunisienne transférant leur résidence habituelle de l’étranger en Tunisie peuvent se faire ouvrir auprès des Intermédiaires Agréés en Tunisie un seul « compte PPR en devises ou en dinars convertibles », sur présentation de la copie, en entier, de leur passeport tunisien.\n\nOpérations au crédit : Les « comptes PPR en devises ou en dinar convertibles » peuvent être crédités librement, sans autorisation préalable par les revenus ou produits des avoirs acquis régulièrement l’étranger ou les sommes provenant de la clôture d’un « compte étranger en devise ou en dinars convertibles » du titulaire du compte de même que les intérêts produits par les sommes déposées dans le compte.\n\n opérations au débit : Les montants déposés dans le « compte PPR en devises ou en dinar convertibles » peuvent être utilisés pour :\n\n- La cession des devises sur le marché des changes, ainsi que tout règlement en dinar ;- Tout règlement à l’étranger, au titre des dépenses personnelles dûment justifiées, pour le compte du titulaire du compte, son conjoint ainsi que ses descendants ou ascendants au premier degré résidents sur le plan change ;- Tout transfert pour l’acquisition par le titulaire du compte lui-même de biens meubles et immeubles situés à l’étranger, de droits et de créances sur l’étranger ainsi que pour effectuer tout acte de gestion des avoirs régulièrement détenus à l’étranger. Toutefois, le titulaire du compte ne peut en aucun cas constituer des avoirs en comptes bancaires à l’étranger.\n	Comment peut-on transférer les disponibilités du « compte PPR en devise ou en dinars convertibles » ?\n\nLes transferts par débit du compte PPR peuvent avoir lieu par virement, chèque tiré sur l’Intermédiaire Agréé auprès duquel le compte est ouvert, carte de paiement international ou en espèces exclusivement pour la couverture des frais de séjour.",
    key: "4",
  },
  {
    header:
      "Quand est-ce qu’un investisseur non-résident de nationalité peut bénéficier de la garantie de transfert au titre d’un investissement réalisé en Tunisie ?",
    text: "Tout investisseur non-résident (tunisien ou étranger) bénéficie de la garantie de transfert automatiquement s’il remplit les deux conditions cumulatives suivantes: (i) l’investissement doit être réalisé dans le respect de la règlementation régissant l’activité dans laquelle il a investi ; et (ii) le financement de l’investissement doit être fait au moyen d’une importation de devises matérialisée par l’établissement d’une fiche d’investissement digitale via la plateforme électronique hébergée sur le site de la Banque Centrale de Tunisie à l’adresse suivante : « fiche-invest.bct.gov.tn/FichInvest».\n\nLa garantie de transfert confère à l’investisseur non-résident le libre transfert des revenus liés à l’investissement tels que les dividendes, les jetons de présence, le produit de cession ou de liquidation de son investissement. Les modalités d’établissement de la fiche d’investissement ainsi que les procédures afférentes aux transferts des revenus d’investissement sont prévues par la circulaire n°2018-14 du 26 décembre 2018.",
    key: "5",
  },
  {
    header:
      "Est-ce qu’une personne physique tunisienne non-résidente peut investir en Tunisie au moyen d’un apport en nature ?",
    text: "Tout investisseur non-résident doit obligatoirement financer son investissement réalisé en Tunisie par importation de devises. Toutefois, des dérogations à cette règle sont accordées, au cas par cas, par la Banque Centrale de Tunisie lorsque le financement est assuré par apports en nature (équipements, machines) ou par conversion de créances commerciales ou financières détenues envers des résidents. Seule la conversion du principal au titre des avances en compte courant associés/actionnaires est libre sur le plan change, lorsqu’elle est effectuée dans le respect de la circulaire n°2018-14 du 26 décembre 2018 ",
    key: "6",
  },
];

const Acquisition: React.FC = () => {
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

export default Acquisition;
