import './Spinner.scss';

const Spinner = ({ type }) => {
  console.log(
    '%c--- Spinner - render()',
    'font-family:arial;color:yellow;font-weight:bold;font-size:0.75rem'
  );
  //type: small(3rem).
  const classes = `loader ${type}`;

  return <div className={classes}></div>;
};

export default Spinner;
