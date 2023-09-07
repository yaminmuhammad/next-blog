import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
	// temporary
	const status = "authenticated";
	return (
		<>
			{status === "not authenticated" ? (
				<Link href="/login">Login</Link>
			) : (
				<>
					<Link href="/write">Write</Link>
					<span className={styles.link}>Logout</span>{" "}
				</>
			)}
		</>
	);
};

export default AuthLinks;
