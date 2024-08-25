export default function Cell({ id, cellData }) {
  const { value, top, right, bottom, left } = cellData;

  const className = value === 0 ? "unexplored" : "empty";

  return (
    <td
      id={id}
      className={className}
      data-top={top}
      data-right={right}
      data-left={left}
      data-bottom={bottom}
    >
      {/* Cell content can be added here if needed */}
      {/* {value} */}
    </td>
  );
}
