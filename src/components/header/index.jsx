import { useDispatch, useSelector } from "react-redux";
import { MoonIcon as MoonIconOutline } from "@heroicons/react/24/outline";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/24/solid";
import { toggleTheme } from "../../app/features/theme/themeSlice";

import { Button, Container, Title } from "./style";

export default function Header() {
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <Container $dark={isDark}>
      <Title $dark={isDark}>Where in the world?</Title>
      <Button $dark={isDark} onClick={() => dispatch(toggleTheme())}>
        {isDark ? <MoonIconSolid /> : <MoonIconOutline />}
        <span>Dark Mode</span>
      </Button>
    </Container>
  );
}
