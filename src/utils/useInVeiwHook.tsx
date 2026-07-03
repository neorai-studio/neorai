import { type RefObject, useEffect, useRef, useState } from "react";

// Custom hook
function useInView(
	threshold = 0.2,
): [RefObject<HTMLDivElement | null>, boolean] {
	const ref = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect(); // animate once only
				}
			},
			{ threshold },
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold]);

	return [ref, inView];
}

export default useInView;
