import { MainLayout, MarqueeItem, MarqueeTrack } from "./styles";

const keys = [
	"CE1 Armor Protection",
	"600D Cordura Fabric",
	"Waterproof Membrane",
	"Removable Protector",
	"Urban Tactical Design",
	"All-Season Construction",
	"CE1 Armor Protection",
	"600D Cordura Fabric",
	"Waterproof Membrane",
	"Removable Protector",
	"Urban Tactical Design",
	"All-Season Construction",
];

const Marquee = () => {
	return (
		<MainLayout>
			<MarqueeTrack>
				{keys.map((value: string) => (
					<MarqueeItem key={value}>{value}</MarqueeItem>
				))}
			</MarqueeTrack>
		</MainLayout>
	);
};

export default Marquee;
