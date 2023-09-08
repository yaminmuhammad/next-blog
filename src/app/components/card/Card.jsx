import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src="/p1.jpeg" alt="" fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>11.02.2021 - </span>
					<span className={styles.category}>Culture</span>
				</div>
				<Link href="/">
					<h1>Lorem ipsum dolor sit amet consectetur adispicing elit.</h1>
				</Link>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam, voluptatum, quos, quod
					voluptatem quia quae voluptas officiis quas voluptatibus quibusdam, voluptatum, quos, quod
					voluptatem quia quae voluptas officiis quas voluptatibus
				</p>
				<Link href="/" className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Card;
