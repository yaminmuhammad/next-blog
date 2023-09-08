import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey, yamin dev here!</b> Discover my stories and creativity ideas.
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src="/p1.jpeg" alt="" fill />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>Lorem Ipsum dolor sit amet alim consectetur adipiscing elit.</h1>
					<p className={styles.postDescription}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, voluptatum, quod, quas
						voluptatem quia quibusdam aspernatur, voluptate voluptates quos doloribus. Quisquam quidem,
						voluptatum, quod, quas voluptatem quia quibusdam aspernatur,
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
