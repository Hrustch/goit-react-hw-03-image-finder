import { Grid, GridItem, CardItem } from 'components';
export const PhotosList = ({photos, handleImg}) => {
  return (
    <Grid onClick={(event)=>{handleImg(event.target.src)}}>
      {photos.map(({ id, previewURL }) => (
        <GridItem key={id}>
          <CardItem color="grey">
              <a href={previewURL}>
                <img src={previewURL} alt=''/>
              </a>
          </CardItem>
        </GridItem>
      ))}
    </Grid>
  );
};
