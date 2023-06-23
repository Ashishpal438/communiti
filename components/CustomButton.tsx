interface CustomButtonProps {
  theanClass: string
}

const CustomButton = ({ theanClass }: CustomButtonProps) => {
  return <div className={`${theanClass}`}>hello</div>;
};

export default CustomButton;
