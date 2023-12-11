import "./Progressbar.scss";

interface Props {
  currentValue: number;
  max: number;
}

const Progressbar = ({ currentValue, max }: Props) => {
  return <progress className="progressbar" max={max} value={currentValue} />;
};

export default Progressbar;
