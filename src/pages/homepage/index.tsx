import type React from "react";
import { MainLayout } from "./styles";
import IntroSection from "./components/IntroSection";
import Navbar from "../../components/Navbar";
import StatBar from "./components/StatBar";
import OurStory from "./components/OurStory";
import Marquee from "../../components/Marquee";
import TheHoodie from "./components/TheHoodie";
import PremiumMaterials from "./components/PremiumMaterials";
import LooseArmor from "./components/LooseArmor";
import LifestyleGrid from "./components/LifestyleGrid";
import PurchaseCTA from "./components/PurchaseCTA";
import Footer from "./components/Footer";
import ImpactSection from "./components/ImpactSection";
import LayerAssembly from "./components/LayerAssembly";

const Homepage: React.FC = () => {
	return (
		<MainLayout>
			<Navbar />
			<IntroSection />
			<StatBar />
			<OurStory />
			<ImpactSection />
			<LayerAssembly />
			<Marquee />
			<TheHoodie />
			<Marquee />
			<PremiumMaterials />
			<LooseArmor />
			<LifestyleGrid />
			<PurchaseCTA />
			<Footer />
		</MainLayout>
	);
};

export default Homepage;
