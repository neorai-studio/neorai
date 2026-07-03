import useInView from "../../../../utils/useInVeiwHook";
import { type StatItem, startItems } from "../../models/contentText";
import {
	ContentWrap,
	ItemInfo,
	ItemValue,
	MainLayout,
	StatBarItem,
} from "./styles";

const StatBar = () => {
	const [ref, inView] = useInView(0.2);

	const startBarItems = (items: StatItem[]) =>
		items.map((item) => (
			<StatBarItem key={item.value}>
				<ItemValue className="stat-item-value">{item.value}</ItemValue>
				<ItemInfo className="stat-item-info">{item.info}</ItemInfo>
			</StatBarItem>
		));

	return (
		<MainLayout ref={ref} $inView={!!inView}>
			<ContentWrap>{startBarItems(startItems)}</ContentWrap>
		</MainLayout>
	);
};

export default StatBar;
