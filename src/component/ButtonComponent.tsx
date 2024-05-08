interface buttonProps {
  text?: string;
  bgColor?: string;
}

const AppButton = ({ text = "", bgColor }: buttonProps) => {
  return <button className={`${bgColor} px-10 py-10`}>{text}</button>;
};

export default AppButton;
