import { alpha } from "@mui/material";

export const ProviderBoxStyles = {
  p: 5,
  alignSelf: "center",
  height: { xs: 200, sm: 700 },
  width: "100%",
  backgroundImage:
    'url("/static/images/templates/templates-images/hero-light.png")',
  backgroundSize: "cover",
  borderRadius: "10px",
  outline: "1px solid",
  outlineColor: alpha("#BFCCD9", 0.5),
  boxShadow: `0 0 12px 8px ${alpha("#000000", 0.2)}`,
};
