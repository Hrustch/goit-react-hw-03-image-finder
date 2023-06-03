import { Grid, GridItem, CardItem } from 'components';
export const PhotosList = ({photos}) => {
  return (
    <Grid>
      {photos.map(({ id, previewURL }) => (
        <GridItem key={id}>
          <CardItem color="grey">
            <img src={previewURL} alt=''/>
          </CardItem>
        </GridItem>
      ))}
    </Grid>
  );
};
