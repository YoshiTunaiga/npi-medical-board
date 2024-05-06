import { alpha } from "@mui/material";
import styled from "styled-components";

export const ProviderBoxStyles = {
  p: 5,
  alignSelf: "center",
  minHeight: "60vh",
  // height: { xs: 200, sm: 700 },
  border: "1px solid #0959AA",
  width: "100%",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  outline: "1px solid",
  outlineColor: alpha("#BFCCD9", 0.5),
  boxShadow: `0 0 12px 8px ${alpha("#0959AA", 0.2)}`,
};

export const StyledBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    align-items: center;
  }
`;
