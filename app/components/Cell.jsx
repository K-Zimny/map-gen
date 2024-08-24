const determineBorderless = (direction, value, adjacentValue) => {
  console.log(
    "determineBorderless value, adjectcent Value: ",
    value,
    adjacentValue
  );
  if (value === adjacentValue) return `borderless-${direction}`;
};

const determineIsolatedCell = (value, top, right, left, bottom) => {
  if (value !== top && value !== right && value !== left && value !== bottom) {
    return true;
  }
};

export default function Cell({ id, cellData, grid, showCellValues }) {
  const { value, top, right, bottom, left } = cellData;

  console.table(grid);

  console.log("value in cell(): ", value);

  const className = value === 0 ? "unexplored" : "empty";

  return (
    <td
      id={id}
      className={className}
      data-value={showCellValues}
      // data-isolated={determineIsolatedCell(value, top, right, left, bottom)}
      data-top={determineBorderless("top", value, top)}
      data-right={determineBorderless("right", value, right)}
      data-left={determineBorderless("left", value, left)}
      data-bottom={determineBorderless("bottom", value, bottom)}
    >
      {/* Cell content can be added here if needed */}
      {value}
    </td>
  );
}
