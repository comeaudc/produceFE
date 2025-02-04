import { ListItem } from "./ListItem";

export const ProduceTable = ({ produce, setProduce }) => {

    let rows = produce.map((el) => {
        return <ListItem allInventory={produce} setInventory={setProduce} produce={el} />;
      })

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};
