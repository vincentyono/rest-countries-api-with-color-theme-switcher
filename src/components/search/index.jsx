import { useDispatch, useSelector } from "react-redux";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Container, Input } from "./style";

export default function SearchBox() {
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const onTextInput = (e) => {
    // dispatch();
  }

  return (
    <Container $dark={isDark}>
      <MagnifyingGlassIcon $dark={isDark} />
      <Input placeholder="Search for a country..." $dark={isDark} onChange={onTextInput}/>
    </Container>
  );
}
