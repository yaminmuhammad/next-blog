import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
const Comments = () => {
	const status = "authenticated";

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === "authenticated" ? (
				<div className={styles.write}>
					<textarea placeholder="write a comment..." className={styles.input} />
					<button className={styles.button}>Send</button>
				</div>
			) : (
				<Link href="/">Login to write a comment</Link>
			)}
			<div className={styles.comments}>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image src="/p1.jpeg" width={50} height={50} alt="" className={styles.image} />
						<div className={styles.userInfo}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>10.10.2023</span>
						</div>
					</div>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
						dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
					</p>
				</div>
			</div>
			<div className={styles.comments}>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image src="/p1.jpeg" width={50} height={50} alt="" className={styles.image} />
						<div className={styles.userInfo}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>10.10.2023</span>
						</div>
					</div>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
						dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Comments;
