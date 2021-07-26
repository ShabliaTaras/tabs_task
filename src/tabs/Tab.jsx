import "../tabs/tabs.css";

export const Tab = (props) => {
  return (
    <div
      className={props.isActive ? "inner__item active" : "inner__item"}
      onClick={props.toggleTab}
    >
      {props.label}
    </div>
  );
};
