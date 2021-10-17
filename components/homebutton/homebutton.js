import Link from "next/link";
import styles from '../homebutton/homebutton.module.css'
import { useState } from "react";


function Homebutton() {
  const [isShown, setIsShown] = useState(false);

  return (
    <Link href="/work" passHref>
      <div
        className={styles.workbutton}
        style={{
          color: isShown ? "black" : "white",
          fontWeight: isShown ? "600" : "normal",
          backgroundColor: isShown ? "#c8fa5c" : "transparent",
          border: isShown ? "none" : "1px solid",
          cursor: isShown ? "ne-resize" : "n-resize",
        }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        work
      </div>
    </Link>
  );
}

export default Homebutton;