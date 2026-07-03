import {
	FooterSection,
	FooterGrid,
	FooterColumn,
	FooterTitle,
	FooterLink,
	SocialIcons,
	SocialIcon,
	Copyright,
} from "./styles";

/* ═══ Social SVG Icons ═══ */

const InstagramIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<rect x="2" y="2" width="20" height="20" rx="5" />
		<circle cx="12" cy="12" r="5" />
		<circle
			cx="17.5"
			cy="6.5"
			r="1.5"
			fill="currentColor"
			stroke="none"
		/>
	</svg>
);

const FacebookIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor">
		<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
	</svg>
);

const TwitterIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor">
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
	</svg>
);

const YoutubeIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor">
		<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
	</svg>
);

/**
 * Section E — Footer
 * Minimal dark footer with four columns:
 * Full Site Map, Terms, Social Links (icons), and additional links.
 * Copyright text is anchored at the absolute bottom.
 */
const Footer = () => {
	return (
		<FooterSection>
			<FooterGrid>
				{/* Column 1: Full Site Map */}
				<FooterColumn>
					<FooterTitle>Full Site Map</FooterTitle>
					<FooterLink href="#">Home</FooterLink>
					<FooterLink href="#">Features</FooterLink>
					<FooterLink href="#">Armor</FooterLink>
					<FooterLink href="#">Gallery</FooterLink>
					<FooterLink href="#">Contact</FooterLink>
				</FooterColumn>

				{/* Column 2: Terms */}
				<FooterColumn>
					<FooterTitle>Terms</FooterTitle>
					<FooterLink href="#">Refund/Cancel</FooterLink>
					<FooterLink href="#">Privacy Policy</FooterLink>
					<FooterLink href="#">Warranty/Disclaimer</FooterLink>
					<FooterLink href="#">Terms of Service</FooterLink>
				</FooterColumn>

				{/* Column 3: Social Links (icons) */}
				<FooterColumn>
					<FooterTitle>Social Links</FooterTitle>
					<SocialIcons>
						<SocialIcon href="#" aria-label="Instagram">
							<InstagramIcon />
						</SocialIcon>
						<SocialIcon href="#" aria-label="Facebook">
							<FacebookIcon />
						</SocialIcon>
						<SocialIcon href="#" aria-label="Twitter / X">
							<TwitterIcon />
						</SocialIcon>
						<SocialIcon href="#" aria-label="YouTube">
							<YoutubeIcon />
						</SocialIcon>
					</SocialIcons>
				</FooterColumn>

				{/* Column 4: Additional Links */}
				<FooterColumn>
					<FooterTitle>Social Links</FooterTitle>
					<FooterLink href="#">About Us</FooterLink>
					<FooterLink href="#">Press/Media</FooterLink>
					<FooterLink href="#">Affiliate Program</FooterLink>
					<FooterLink href="#">Contact Info</FooterLink>
					<FooterLink href="#">Shipping Info</FooterLink>
				</FooterColumn>
			</FooterGrid>

			<Copyright>
				© 2025 IRONCLAD | Terms &amp; Conditions
			</Copyright>
		</FooterSection>
	);
};

export default Footer;
