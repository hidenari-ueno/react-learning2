import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <Scontainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
