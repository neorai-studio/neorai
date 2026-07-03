import { RoadLine, RoadLinesWrapper } from "./styles";

const lines: { offset: string; delay: string }[] = [
	{ offset: "-60px", delay: "0s" },
	{ offset: "-20px", delay: "0.3s" },
	{ offset: "+20px", delay: "0.6s" },
	{ offset: "+60px", delay: "0.9s" },
];

// component

const RoadLines = () => {
	return (
		<RoadLinesWrapper>
			{lines.map((line) => (
				<RoadLine key={line.offset} offset={line.offset} delay={line.delay} />
			))}
		</RoadLinesWrapper>
	);
};

export default RoadLines;
