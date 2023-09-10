import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src="/logo.png" alt="Yamin's Blog" width={50} height={50} />
					<h1 className={styles.logoText}>{"Yamin's Blog"}</h1>
				</div>
				<p className={styles.desc}>
					lorem ipsum dolor sit amet.kanknn kasjfrm akfnka ekndknas ekajdk kne ljsnfknfk fkjskf ksnf ksfn
					kkjsdf ksjjr ksjrkjse krkjw akjek kawkj ksjrkjse kjr k kwe rnka rkr wkrk wkjr kwje wrkrkjwe3 kjkq
					mnad ksjfdks kmfksm fksdmf kmfd ksmfd
				</p>
				<div className={styles.icons}>
					<Image src={"/facebook.png"} alt="" width={18} height={18} />
					<Image src={"/instagram.png"} alt="" width={18} height={18} />
					<Image src={"/tiktok.png"} alt="" width={18} height={18} />
					<Image src={"/youtube.png"} alt="" width={18} height={18} />
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href="/">Homepage</Link>
					<Link href="/">Blog</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href="/">Style</Link>
					<Link href="/">Fashion</Link>
					<Link href="/">Coding</Link>
					<Link href="/">Travel</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href="/">Facebook</Link>
					<Link href="/">Instagram</Link>
					<Link href="/">Tiktok</Link>
					<Link href="/">Youtube</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
