import styles from "./DescriptionScale.module.css";

const DescriptionScale: React.FC<{ title: string; scale: number }> = (
  props
) => {
  const getUnfilledBox = (key: number) => {
    return <li key={key} className={styles["unfilled-box"]}></li>;
  };
  const getFilledBox = (key: number) => {
    return <li key={key} className={styles["filled-box"]}></li>;
  };

  function generateScale() {
    // scale must be between 0 and 5, 0 and 5 inclusive
    if (props.scale > 5 || props.scale < 0) {
      return;
    }

    let scale = [];

    // if the scale is greater than or equal to 5
    if (props.scale === 5) {
      for (let i = 0; i < 5; i++) {
        scale.push(getFilledBox(i));
      }

      return scale;
    }

    // if the scale is less than or equal to 5
    if (props.scale === 0) {
      for (let i = 0; i < 5; i++) {
        scale.push(getUnfilledBox(i));
      }
      return scale;
    }

    // else
    for (let i = 0; i < props.scale; i++) {
      scale.push(getFilledBox(i));
    }

    for (let i = 0; i < 5 - props.scale; i++) {
      scale.push(getUnfilledBox(i + props.scale));
    }
    return scale;
  }

  return (
    <li className={styles.li}>
      <h4 className={styles.title}>{props.title}</h4>
      <ul className={styles.ul}>{generateScale()}</ul>
    </li>
  );
};

export default DescriptionScale;
