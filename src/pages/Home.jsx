import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Home() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSearchProvider = () => navigate(`/api/${id}`);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        padding: 0,
        margin: 100,
        background: `linear-gradient(rgba(255, 255,255, 100%), rgba(9, 89, 170, 10%))`,
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          minHeight: "100vh",
          padding: "40px 100px 60px 100px",
        }}>
        <Stack
          spacing={0}
          useFlexGap
          sx={{
            width: { xs: "100%", sm: "70%" },
            mt: 0,
            mb: 3,
          }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.0rem, 8vw, 2rem)",
            }}>
            Our&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}>
              PROVIDERS&nbsp;
            </Typography>
            information
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              alignSelf: "center",
              width: { sm: "100%", md: "90%" },
            }}>
            Explore our cutting-edge dashboard, delivering your providers
            information tailored to your needs.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}>
            <TextField
              id="outlined-controlled"
              hiddenLabel
              size="small"
              variant="outlined"
              value={id || ""}
              placeholder="Your provider's NPI"
              inputProps={{
                autoComplete: "off",
              }}
              onChange={(event) => setId(event.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              disabled={!id}
              onClick={handleSearchProvider}>
              Search now
            </Button>
          </Stack>
        </Stack>
        <p>Powered by mimilabs.ai</p>
      </div>
    </div>
  );
}
