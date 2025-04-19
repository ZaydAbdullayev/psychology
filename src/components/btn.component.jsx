import "./index.scss"

export const Button = ({ text, action }) => {
  return (
    <button className={`btn-weird`} onClick={action}>
      {text}
    </button>
  );
};
