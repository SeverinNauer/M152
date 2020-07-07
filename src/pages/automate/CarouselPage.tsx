import React from "react";
import ContentBox from "../../components/ContentBox";
import {
  Typography,
  Card,
  Link,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CodeExample from "../../components/CodeExample";


//TODO Quellenangabe
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
      <Typography variant="h5">Automatische Slideshow</Typography>
      <Typography variant="subtitle1">
        Das untenstehende Beispiel benutzt das NPM Package{" "}
        <Link href="https://www.npmjs.com/package/react-responsive-carousel">
          react-response-carousel
        </Link>
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
      <CodeExample>{`import React from "react";
import { Card, Link } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
      
interface IImage {
  name: string;
  alt: string;
}
  
const Image = (props: IImage) => {
  const { name, alt } = props;
  return (
    <div>
      <img
        src={\`\${process.env.PUBLIC_URL}/assets/carousel/\${name}\`}
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
  );
};
      `}</CodeExample>


      <Typography variant="h6">Copyright</Typography>
      <Typography variant="body1">
        Für die Slideshow wurden lediglich Copyright ungeschützte Bilder
        verwendet. Die links für diese werden unterhalb aufgelistet
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText>
            <Link href="https://pixabay.com/de/photos/landschaft-berge-panorama-4587079/">Bild 1</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link href="https://pixabay.com/de/photos/hund-tier-h%C3%BCndchen-niedlich-jung-5357794/">Bild 2</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link href="https://pixabay.com/de/photos/b%C3%A4ume-wald-sommer-griechenland-5350721/">Bild 3</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link href="https://pixabay.com/de/photos/v%C3%B6gel-im-flug-g%C3%A4nse-vogel-tier-5366034/">Bild 4</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link href="https://pixabay.com/de/photos/kornblumen-sonnenuntergang-m%C3%BCcken-5352633/">Bild 5</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link href="https://pixabay.com/de/photos/wildbach-fluss-wasser-landschaft-5360379/">Bild 6</Link>
          </ListItemText>
        </ListItem>
      </List>
    </ContentBox>
  );
};

export default CarouselPage;
