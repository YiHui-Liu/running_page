import React from 'react';
import { formatPace, titleForRun } from 'src/utils/utils';
import { RUNC, RIDEC } from 'src/utils/const';
import styles from './style.module.scss';

const RunRow = ({ works, work, locateActivity, runIndex, setRunIndex }) => {
  const distance = (work.distance / 1000.0).toFixed(1);
  const pace = work.average_speed;

  const paceParts = pace ? formatPace(pace) : null;

  const heartRate = work.average_heartrate;

  // change click color
  const handleClick = (e, works, work) => {
    const elementIndex = works.indexOf(work);
    e.target.parentElement.style.color = 'red';

    const elements = document.getElementsByClassName(styles.runRow);
    if (runIndex !== -1 && elementIndex !== runIndex) {
      elements[runIndex].style.color = works[runIndex].type=='run' ? RUNC:RIDEC;
    }
    setRunIndex(elementIndex);
  };

  return (
    <tr
      className={styles.runRow}
      key={work.start_date_local}
      onClick={(e) => {
        handleClick(e, works, work);
        locateActivity(work);
      }}
      style={work.type=='run' ? {color: RUNC}:{color: RIDEC}}
    >
      <td>{titleForRun(work)}</td>
      <td>{distance}</td>
      {pace && <td>{paceParts}</td>}
      <td>{heartRate && heartRate.toFixed(0)}</td>
      <td className={styles.runDate}>{work.start_date_local}</td>
    </tr>
  );
};

export default RunRow;
