import Image from "next/image";
import background from "../../../public/background.png";
import styles from "./styles.module.css";

export default function Background() {
  return (
    <div className={styles.backgroundImage}>
      <Image
        alt="Background"
        src={background}
        placeholder="blur"
        quality={100}
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
