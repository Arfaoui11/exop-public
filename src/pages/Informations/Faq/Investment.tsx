import "animate.css/animate.min.css";
import { Collapse, Typography } from "antd";
const { Paragraph, Title } = Typography;

const { Panel } = Collapse;

const invData = [
  {
    header: "Comment avoir sa fiche d'investissement",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    key: "1",
  },
  {
    header: "Question 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    key: "2",
  },
  {
    header: "Question 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
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
