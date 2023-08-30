import "animate.css/animate.min.css";
import { Collapse, Typography } from "antd";
const { Paragraph, Title } = Typography;

const { Panel } = Collapse;

const invData = [
  {
    header:
      "Est-ce qu’une personne physique résidente peut investir à l’étranger librement?",
    text: "Les Personnes Physiques Résidentes ne peuvent investir à l’étranger qu’après autorisation préalable de la Banque Centrale de Tunisie donnée après avis favorable du Ministère des Finances à l’exception des personnes physiques résidentes titulaires de Comptes Personnes Physiques Résidentes ;",
    key: "1",
  },
  {
    header:
      "Est-ce qu’une personne physique ou morale résidente peut acquérir en devises auprès d’une autre personne physique ou morale résidente une part au capital d’une société installée à l’étranger?",
    text: "Le règlement du prix d’acquisition par une personne physique ou morale résidente d’une part qu’elle déteint au capital d’une société établie à l’étranger une autre personne physique ou morale résidente doit s’effectuer en dinars tunisiens.L’opération d’acquisition est assujettie à l’obligation de déclaration à la Banque centrale de Tunisie. Il en est de même pour les titres de capital détenus dans des sociétés établies en Tunisie et créées sous le statut de non-résidentes",
    key: "2",
  },
  {
    header:
      "Est-ce qu’une personne physique ou morale résidente peut loger dans un compte en devises en Tunisie les dividendes générés par sa prise de participation au capital d’une société non-résidente établie en Tunisie ou par son investissement réalisé à l’étranger ?",
    text: "Les personnes physiques ou morales résidentes ne peuvent pas loger les dividendes générés suite à des prises de participation au capital des sociétés non-résidentes établies ou au titre de leurs participations dans des sociétés établies à l’étranger.\nCes revenus doivent être rapatriés en totalité en Tunisie et cédés en dinars tunisiens.",
    key: "3",
  },
];

const Investment: React.FC = () => {
  return (
    <>
      <div className="">
        <Collapse accordion className="accordion-inv">
          {invData.map((invItems, index) => (
            <>
              <Panel header={invItems.header} key={invItems.key}>
                <p>{invItems.text}</p>
              </Panel>
            </>
          ))}
        </Collapse>
      </div>
    </>
  );
};

export default Investment;
