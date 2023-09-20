const PiComp = ({ color, category, expense }) => {
  const divStyle = {
    backgroundColor: color, // Set the background color dynamically
  };

  return (
    <div className="flex items-center gap-4">
      <div style={divStyle} className="h-[5vh] w-[5vh]"></div>
      <div className="flex flex-col">
        <p>{category}</p>
        <p>₹ {expense}</p>
      </div>
    </div>
  );
};

export default PiComp;
