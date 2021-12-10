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
import categories from "../utils/categories";

export default function AdvancedSearch() {
  const { state, dispatch } = useContext(Store);
  const { search } = state;
  const [open, setOpen] = useState(false);

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
    border: "2px solid #000",
    borderRadius: "7px",
    boxShadow: 24,
    p: { xs: 1, sm: 4 },
    my: 1,
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
          <Container maxWidth={false}>
            <Typography variant="h5" component="h2">
              Advanced Search
            </Typography>
            <form onSubmit={handleClose}>
              <FormControl component="fieldset" fullWidth sx={{}}>
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup
                  aria-label="Type"
                  name="controlled-radio-buttons-group"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
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
                  {categories.type.map((item) => {
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
                  onChange={(e) => setDiet(e.target.value)}
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

              <Button type="submit">Submit</Button>
            </form>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
