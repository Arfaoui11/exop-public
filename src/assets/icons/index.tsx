import { SvgImage } from "../../components";
import Breakout from "./chart-breakout-square.svg";
import Message from "./message-chat-circle.svg";
import MessageSmile from "./message-smile-circle.svg";
import Top from "./top.svg";
type IconType = {
  size?: number;
};

const BreakoutIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Breakout} alt="Analyse icon" />
);
const MessageIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Message} alt="Arrow icon" />
);
const MessageSmileIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={MessageSmile} alt="Arrow icon" />
);
const ZapIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Top} alt="Bookmark icon" />
);
const TopIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Top} alt="Top icon" />
);

export { BreakoutIcon, MessageIcon, MessageSmileIcon, ZapIcon, TopIcon };
