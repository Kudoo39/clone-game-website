import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevant" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popalarity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedLabel =
    sortOrders.find((order) => order.value === selectedSortOrder)?.label ||
    "Order by: Rating";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedLabel}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
