const determineBorderless = (direction, value, adjacentValue) => {
  if (value === adjacentValue) return `borderless-${direction}`;
};

const determineIsolatedCell = (value, top, right, left, bottom) => {
  if (value !== top && value !== right && value !== left && value !== bottom) {
    return true;
  }
};

export default function Cell({ id, cellData }) {
  const { value, top, right, bottom, left } = cellData;

  const className = value === 0 ? "unexplored" : "empty";

  return (
    <td
      id={id}
      className={className}
      data-isolated={determineIsolatedCell(value, top, right, left, bottom)}
      data-top={determineBorderless("top", value, top)}
      data-right={determineBorderless("right", value, right)}
      data-left={determineBorderless("left", value, left)}
      data-bottom={determineBorderless("bottom", value, bottom)}
    >
      {/* Cell content can be added here if needed */}
      {/* {value} */}
    </td>
  );
}
