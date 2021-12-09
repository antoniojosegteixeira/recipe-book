import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import TrashIcon from "@mui/icons-material/Delete";
import categories from "../utils/categories";

export default function AdvancedSearch() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState({
    type: "",
    cuisine: [],
    intolerances: [],
    diet: "",
  });
  const uniqueFilters = ["type", "diet"];

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (group, value) => {
    // Checking if it's an unique value
    if (uniqueFilters.includes(group)) {
      if (search[group] === value) {
        setSearch({ ...search, [group]: "" });
      } else {
        setSearch({ ...search, [group]: value });
      }
      return;
    }

    // Checking if it's an array
    if (!search[group].includes(value)) {
      setSearch({ ...search, [group]: [...search[group], value] });
    } else {
      const newClone = [...search[group]];
      const index = newClone.indexOf(value);
      newClone.splice(index, 1);

      setSearch({ ...search, [group]: newClone });
    }
  };

  console.log(search);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 800,
    maxHeight: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "7px",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <Typography variant="h5" component="h2">
              Advanced Search
            </Typography>
            {Object.keys(categories).map((parameter, i) => {
              return (
                <div key={i}>
                  <Typography
                    component="h2"
                    variant="h5"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {parameter}
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <List>
                        {categories[parameter].map((item, i) => {
                          if (
                            i < Math.floor(categories[parameter].length / 2)
                          ) {
                            return (
                              <ListItem
                                key={item}
                                onClick={() => handleClick(parameter, item)}
                              >
                                <Typography variant="h6">{item}</Typography>
                              </ListItem>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </List>
                    </Grid>
                    <Grid item xs={6}>
                      <List>
                        {categories[parameter].map((item, i) => {
                          if (
                            i >= Math.floor(categories[parameter].length / 2)
                          ) {
                            return (
                              <ListItem
                                key={item}
                                onClick={() => handleClick(parameter, item)}
                              >
                                <Typography variant="h6">{item}</Typography>
                              </ListItem>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </List>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
