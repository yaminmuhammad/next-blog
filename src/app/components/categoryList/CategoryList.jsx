import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories</h1>
			<div className={styles.categories}>
				<Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
					<Image src="/style.png" width={32} height={32} className={styles.image} />
					style
				</Link>
				<Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
					<Image src="/style.png" width={32} height={32} className={styles.image} />
					fasion
				</Link>
				<Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
					<Image src="/style.png" width={32} height={32} className={styles.image} />
					style
				</Link>
				{/*  */}
				<Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
					<Image src="/style.png" width={32} height={32} className={styles.image} />
					style
				</Link>
				<Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
					<Image src="/style.png" width={32} height={32} className={styles.image} />
					style
				</Link>
			</div>
		</div>
	);
};

export default CategoryList;
