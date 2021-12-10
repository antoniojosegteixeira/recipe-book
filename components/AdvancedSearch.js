import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import {
  Button,
  Modal,
  Box,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  IconButton,
} from "@mui/material";
import ConfigIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import categories from "../utils/categories";

export default function AdvancedSearch() {
  const { state, dispatch } = useContext(Store);
  const { search } = state;
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [type, setType] = useState(search.type);
  const [cuisine, setCuisine] = useState(search.cuisine);
  const [intolerances, setIntolerances] = useState(search.intolerances);
  const [diet, setDiet] = useState(search.diet);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({
      type: "ADD_SEARCH",
      payload: { type, cuisine, intolerances, diet },
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: "ADD_SEARCH",
      payload: { type, cuisine, intolerances, diet },
    });
    const advSearch = {
      type,
      cuisine: cuisine.join(","),
      intolerances: intolerances.join(","),
      diet,
    };

    router.push({
      pathname: "/search",
      query: { query: search.query, ...advSearch },
    });
    setOpen(false);
  };

  const handleCuisineChange = (v) => {
    const value = v.target.value;
    cuisine.includes(value)
      ? setCuisine(cuisine.filter((item) => item !== value))
      : setCuisine([...cuisine, value]);
  };

  const handleIntolerancesChange = (v) => {
    const value = v.target.value;
    intolerances.includes(value)
      ? setIntolerances(intolerances.filter((item) => item !== value))
      : setIntolerances([...intolerances, value]);
  };

  const style = {
    maxHeight: "100%",
    maxWidth: 800,
    bgcolor: "background.paper",
    borderRadius: "7px",
    boxShadow: 24,
    p: { xs: 1, sm: 4 },
    my: 1,
    mx: 2,
    overflowY: "scroll",
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        color="primary"
        sx={{ minWidth: 0, color: "primary.dark" }}
      >
        <ConfigIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={style}>
          <Container maxWidth={false} sx={{ position: "relative" }}>
            <IconButton
              sx={{
                position: "absolute",
                right: 0,
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mt: { xs: 2, sm: 0 }, mb: 2, mr: 3 }}
            >
              Advanced Search
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" fullWidth sx={{}}>
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup
                  aria-label="Type"
                  name="controlled-radio-buttons-group"
                  value={type}
                  onClick={(v) =>
                    v.target.value === type
                      ? setType("")
                      : setType(v.target.value)
                  }
                  row
                >
                  {categories.type.map((item) => {
                    return (
                      <FormControlLabel
                        key={item}
                        value={item}
                        control={<Radio />}
                        label={item}
                        sx={{ width: "48%" }}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset">
                <FormLabel component="legend">Cuisine</FormLabel>
                <FormGroup aria-label="cuisine" name="cuisine-group" row>
                  {categories.cuisine.map((item) => {
                    return (
                      <FormControlLabel
                        key={item}
                        control={
                          <Checkbox
                            checked={cuisine.includes(item)}
                            onChange={handleCuisineChange}
                            name={item}
                            value={item}
                          />
                        }
                        label={item}
                        sx={{ width: "48%" }}
                      />
                    );
                  })}
                </FormGroup>
              </FormControl>

              <FormControl component="fieldset">
                <FormLabel component="legend">Intolerances</FormLabel>
                <FormGroup
                  aria-label="intolerances"
                  name="intolerances-group"
                  row
                >
                  {categories.intolerances.map((item) => {
                    return (
                      <FormControlLabel
                        key={item}
                        control={
                          <Checkbox
                            checked={intolerances.includes(item)}
                            onChange={handleIntolerancesChange}
                            name={item}
                            value={item}
                          />
                        }
                        label={item}
                        sx={{ width: "48%" }}
                      />
                    );
                  })}
                </FormGroup>
              </FormControl>

              <FormControl component="fieldset">
                <FormLabel component="legend">Diet</FormLabel>
                <RadioGroup
                  aria-label="Diet"
                  name="controlled-radio-buttons-group"
                  value={diet}
                  onClick={(v) =>
                    v.target.value === diet
                      ? setDiet("")
                      : setDiet(v.target.value)
                  }
                  row
                >
                  {categories.diet.map((item) => {
                    return (
                      <FormControlLabel
                        key={item}
                        value={item}
                        control={<Radio />}
                        label={item}
                        sx={{ width: "48%" }}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </form>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
