import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Container,
  DropDownContainer,
  DropDownItem,
  OptionText,
} from "./style";

export default function Filter() {
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [filterValue, setFilterValue] = useState("Filter By Region");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <>
      <Container
        $dark={isDark}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <OptionText $dark={isDark}>{filterValue}</OptionText>
        <ChevronDownIcon />
        <DropDownContainer $dark={isDark} $open={isOpen}>
          {options.map((option, index) => (
            <DropDownItem
              key={index}
              $dark={isDark}
              onClick={() => {
                setFilterValue(option);
              }}
            >
              {option}
            </DropDownItem>
          ))}
        </DropDownContainer>
      </Container>
    </>
  );
}
