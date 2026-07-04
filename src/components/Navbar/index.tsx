import { BasicButton } from "../../utils/ButtonsFactory";
import { BrandName, MainLayout } from "./styles";

// const MenuItems = ["STORY", "THE HOODIE", "FEATURES", "RIDERS"];

const Navbar = () => {
	return (
		<MainLayout>
			<BrandName>NEORAI</BrandName>
			<BasicButton>Buy on Etsy</BasicButton>
		</MainLayout>
	);
};

export default Navbar;
