import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../components/menu/Menu";
import Image from "next/image";
import Comments from "../components/comments/Comments";

const SinglePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amer amnakdi kas fkjd elit.</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>10.10.2023</span>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src="/p1.jpeg" alt="" fill className={styles.image} />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description}>
						<p>
							lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum
							dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit
							amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.
						</p>
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p>
							lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum
							dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit
							amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.
						</p>
						<p>
							lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum
							dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit
							amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.
						</p>
						<p>
							lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum
							dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit
							amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet. lorem
							ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit
							amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem
							ipsum dolor sit amet.
						</p>
					</div>
					<div className={styles.comment}>
						<Comments />
					</div>
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default SinglePage;
