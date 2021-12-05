import React from "react";
import { List, ListItem, Typography, Container, Grid } from "@mui/material";
import { BASE_URL } from "../../utils/config";
import axios from "axios";
import { recipe } from "../../utils/mock";
import Image from "next/image";

const Recipe = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Typography component="h1" variant="h2" align="center">
        {data?.title}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={5}>
          <Image
            src={data.image}
            alt={data.title}
            width={720}
            height={500}
            layout="responsive"
          ></Image>
        </Grid>
      </Grid>
      <List>
        <ListItem>
          <Typography component="h4" variant="h4">
            Ingredients
          </Typography>
        </ListItem>
        {data?.extendedIngredients.map((ing) => {
          return <ListItem key={ing.id}>{ing.original}</ListItem>;
        })}
      </List>
      <List>
        <ListItem>
          <Typography component="h4" variant="h4">
            Instructions
          </Typography>
        </ListItem>
        {data?.analyzedInstructions.map((section) => {
          return section.steps.map((step, i) => {
            return (
              <Typography key={i}>
                {i + 1} - {step.step}
              </Typography>
            );
          });
        })}
      </List>
    </Container>
  );
};

export default Recipe;

export async function getServerSideProps(context) {
  const mock = true;
  let result;
  if (!mock) {
    const { params } = context;
    const { id } = params;

    const url = `${BASE_URL}/${id}/information`;
    const options = {
      params: {
        apiKey: process.env.API_KEY,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(url, options);
    result = data;
  } else {
    result = recipe;
  }

  return {
    props: {
      data: result,
    },
  };
}
