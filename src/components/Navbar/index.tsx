import { BasicButton } from "../../utils/ButtonsFactory";
import { BrandName, BtnWrap, MainLayout } from "./styles";

// const MenuItems = ["STORY", "THE HOODIE", "FEATURES", "RIDERS"];

const Navbar = () => {
	return (
		<MainLayout>
			<BrandName>NEORAI</BrandName>
			<BtnWrap>
				<BasicButton>Buy on Etsy</BasicButton>
			</BtnWrap>
		</MainLayout>
	);
};

export default Navbar;
