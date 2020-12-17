import './Spinner.scss';

const Spinner = ({ type }) => {
  //type options: small - 3rem.
  const classes = `loader ${type}`;

  return <div className={classes}>Loading...</div>;
};

export default Spinner;
