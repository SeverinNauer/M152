import React from "react";
import ContentBox from "../../components/ContentBox";
import { Typography, Card } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//https://pixabay.com/de/photos/landschaft-berge-panorama-4587079/
//https://pixabay.com/de/photos/hund-tier-h%C3%BCndchen-niedlich-jung-5357794/
//https://pixabay.com/de/photos/b%C3%A4ume-wald-sommer-griechenland-5350721/
//https://pixabay.com/de/photos/v%C3%B6gel-im-flug-g%C3%A4nse-vogel-tier-5366034/
//https://pixabay.com/de/photos/kornblumen-sonnenuntergang-m%C3%BCcken-5352633/
//https://pixabay.com/de/photos/wildbach-fluss-wasser-landschaft-5360379/

interface IImage {
  name: string;
  alt: string;
}

const Image = (props: IImage) => {
  const { name, alt } = props;
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/carousel/${name}`}
        alt={alt}
      />
    </div>
  );
};

const Images: IImage[] = [
  { name: "birds-flight.jpg", alt: "birds-flight" },
  { name: "cornflowers.jpg", alt: "cornflowers" },
  { name: "dogo.jpg", alt: "dogo" },
  { name: "landscape.jpg", alt: "landscape" },
  { name: "river.jpg", alt: "river" },
  { name: "trees.jpg", alt: "trees" },
];

const CarouselPage = () => {
  return (
    <ContentBox>
      <Typography variant="h4">Automatisierung</Typography>
      <br />
      <Typography variant="h5">
        Beispiel eines automatischen Slideshow
      </Typography>
      <Card>
        <Carousel
          autoPlay
          swipeable
          infiniteLoop
          interval={2000}
          showThumbs={false}
        >
          {Images.map((image, index) => (
            <Image key={index} {...image} />
          ))}
        </Carousel>
      </Card>
    </ContentBox>
  );
};

export default CarouselPage;
