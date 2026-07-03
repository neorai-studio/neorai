import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/material/styles";

const roadAnim = keyframes`
  0%   { top: -80px;  opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 100%;   opacity: 0; }
`;

export const RoadLinesWrapper = styled(Box)({
	position: "absolute",
	bottom: 0,
	right: 0,
	transform: "perspective(600px) rotateX(40deg) translateX(-30%)",
	transformOrigin: "bottom center",
	width: "200px",
	height: "300px",
	overflow: "hidden",
	opacity: 0.8,
	pointerEvents: "none",
});

interface RoadLineProps {
	offset: string;
	delay: string;
}

export const RoadLine = styled(Box, {
	shouldForwardProp: (prop) => prop !== "offset" && prop !== "delay",
})<RoadLineProps>(({ offset, delay }) => ({
	position: "absolute",
	width: "4px",
	height: "80px",
	background: "#ffffff",
	top: "-80px",
	left: `calc(50% + ${offset})`,
	animation: `${roadAnim} 1.2s linear ${delay} infinite`,
}));

export const lines: { offset: string; delay: string }[] = [
	{ offset: "-60px", delay: "0s" },
	{ offset: "-20px", delay: "0.3s" },
	{ offset: "+20px", delay: "0.6s" },
	{ offset: "+60px", delay: "0.9s" },
];
