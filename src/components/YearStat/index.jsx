import React from 'react';
import useHover from 'src/hooks/useHover';
import Stat from 'src/components/Stat';
import { formatPace } from 'src/utils/utils';
import useActivities from 'src/hooks/useActivities';
import styles from './style.module.scss';

function get_avg_pace(works) {
  let sumDistance = 0;
  let streak = 0;
  let pace = 0;
  let paceNullCount = 0;
  let heartRate = 0;
  let heartRateNullCount = 0;
  works.forEach((work) => {
    sumDistance += work.distance || 0;
    if (work.average_speed) {
      pace += work.average_speed;
    } else {
      paceNullCount++;
    }
    if (work.average_heartrate) {
      heartRate += work.average_heartrate;
    } else {
      heartRateNullCount++;
    }
    if (work.streak) {
      streak = Math.max(streak, work.streak);
    }
  });
  return {
    'sum': sumDistance,
    'streak': streak,
    'pace': pace,
    'paceNullCount': paceNullCount,
    'heartRate': heartRate,
    'heartRateNullCount': heartRateNullCount
  }
}

const YearStat = ({ year, onClick }) => {
  let { activities: runs, activities: rides, years } = useActivities();
  // for hover
  const [hovered, eventHandlers] = useHover();
  // lazy Component
  const YearSVG = React.lazy(() =>
    import(`assets/year_${year}.svg`).catch(() => ({
      default: () => <div />,
    }))
  );
  runs = runs.filter((run) => run.type === 'run');
  rides = rides.filter((ride) => ride.type === 'ride');

  if (years.includes(year)) {
    runs = runs.filter((run) => run.start_date_local.slice(0, 4) === year);
    rides = rides.filter((ride) => ride.start_date_local.slice(0, 4) === year);
  }

  let sumDistance = 0;
  let streak = 0;
  let run_pace = 0;
  let ride_pace = 0;
  let run_paceNullCount = 0;
  let ride_paceNullCount = 0;
  let run_heartRate = 0;
  let run_heartRateNullCount = 0;

  let info = get_avg_pace(runs);
  sumDistance += info['sum'];
  streak = Math.max(streak, info['streak']);
  run_pace = info['pace']
  run_paceNullCount = info['paceNullCount']
  run_heartRate = info['heartRate']
  run_heartRateNullCount = info['heartRateNullCount']

  info = get_avg_pace(rides)
  sumDistance += info['sum'];
  streak = Math.max(streak, info['streak']);
  ride_pace = info['pace']
  ride_paceNullCount = info['paceNullCount']
  
  sumDistance = (sumDistance / 1000.0).toFixed(1);
  const run_avgPace = formatPace(run_pace / (runs.length - run_paceNullCount));
  const ride_avgPace = formatPace(ride_pace / (rides.length - ride_paceNullCount));
  const hasHeartRate = !(run_heartRate === 0);
  const avgHeartRate = (run_heartRate / (runs.length - run_heartRateNullCount)).toFixed(0);

  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => onClick(year)}
      {...eventHandlers}
    >
      <section>
        <Stat value={year} description=" Journey" />
        <Stat value={runs.length} description=" Runs" />
        <Stat value={run_avgPace} description=" Avg Pace" />
        <Stat value={rides.length} description=" Rides" />
        <Stat value={ride_avgPace} description=" Avg Pace" />
        <Stat value={sumDistance} description=" KM" />        
        <Stat
          value={`${streak} day`}
          description=" Streak"
          className="mb0 pb0"
        />
        {hasHeartRate && (
          <Stat value={avgHeartRate} description=" Avg Heart Rate" />
        )}
      </section>
      {hovered && (
        <React.Suspense fallback="loading...">
          <YearSVG className={styles.yearSVG} />
        </React.Suspense>
      )}
      <hr color="red" />
    </div>
  );
};

export default YearStat;
