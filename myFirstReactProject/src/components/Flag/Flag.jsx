import './Flag.css';

function Flag(props) {
  const { country, direction, lines } = props;

  return (
    <>
      <div>{country}</div>
      <div className={`flagBox ${direction} `}>
        {lines.map((line, index) =>
          <div key={line.color+''+index} style={{ backgroundColor: line.color }} className="flagLine">
            {
              line.circle &&
              <div style={{ width: line.circle.width, height: line.circle.height, backgroundColor: line.circle.backgroundColor, borderRadius: line.circle.borderRadius, margin: line.circle.margin, boxShadow: line.circle.boxShadow }} className="circles">
              </div>
            }
          </div>
        )}
      </div>
    </>
  );
}

export default Flag;
