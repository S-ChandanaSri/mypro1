import PropTypes from "prop-types";
import styles from "./scale-option.module.css";
import Image from "next/image";

const ScaleOption = ({ className = "" }) => {
  return (
    <div className={styles.scaleOption}>
      <div className={styles.scaleOption1}>
        <Image
          className={styles.radioFilled}
          alt=""
          width={10}
          height={10}
          src="assests//radio--filled.svg"
        />
      </div>
    </div>
  );
};

ScaleOption.propTypes = {
  className: PropTypes.string,
};

export default ScaleOption;
