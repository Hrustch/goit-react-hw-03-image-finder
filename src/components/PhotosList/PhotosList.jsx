import { Grid, GridItem, CardItem } from 'components';
export const PhotosList = ({photos, handleImg}) => {
  return (
    <Grid >
      {photos.map(({ id, webformatURL, largeImageURL }) => (
        <GridItem key={id}>
          <CardItem color="grey">              
                <img src={webformatURL} modal={largeImageURL} alt='' onClick={()=>{handleImg(largeImageURL)}}/>              
          </CardItem>
        </GridItem>
      ))}
    </Grid>
  );
};
