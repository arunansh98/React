function DropDown({ ...props }) {
  const { className, label, ...rest } = props;
  return (
    <div>
      {!label && (
        <div className="font-secondary text-[12px] invisible">label</div>
      )}
      <div className="font-secondary text-[12px]">{label}</div>
      <select className={className} {...rest} type="select"></select>
    </div>
  );
}

export default DropDown;
