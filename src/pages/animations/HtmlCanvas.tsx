import {
  Card,
  createStyles,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
  Theme,
} from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import ContentBox from "../../components/ContentBox";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 40,
      marginTop: 20,
      display: "flex",
      overflowX: "auto"
    },
    canvas: {
      margin: "0 auto",
    },
  })
);

const HtmlCanvas = () => {
  const classes = useStyles();
  const canvas = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const canvasSize = isMobile ? 300 : 400;

  useEffect(() => {
    const drawClock = (ctx: CanvasRenderingContext2D, radius: number) => {
      ctx.shadowBlur = 3;
      ctx.shadowColor = theme.palette.grey[800];
      ctx.lineCap = "round";
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
    };

    const drawFace = (ctx: CanvasRenderingContext2D, radius: number) => {
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.lineWidth = radius * 0.05;
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = "#333";
      ctx.fill();
    };

    const drawNumbers = (ctx: CanvasRenderingContext2D, radius: number) => {
      var ang;
      var num;
      ctx.font = radius * 0.15 + "px arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (num = 1; num < 13; num++) {
        ang = (num * Math.PI) / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }
    };

    const drawTime = (ctx: CanvasRenderingContext2D, radius: number) => {
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      //hour
      hour = hour % 12;
      hour =
        (hour * Math.PI) / 6 +
        (minute * Math.PI) / (6 * 60) +
        (second * Math.PI) / (360 * 60);
      drawHand(ctx, hour, radius * 0.5, radius * 0.07);
      //minute
      minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
      drawHand(ctx, minute, radius * 0.8, radius * 0.07);
      // second
      second = (second * Math.PI) / 30;
      drawHand(ctx, second, radius * 0.9, radius * 0.02);
    };

    const drawHand = (
      ctx: CanvasRenderingContext2D,
      pos: number,
      length: number,
      width: number
    ) => {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    };
    const ctx = canvas.current?.getContext("2d");
    if (ctx) {
      const halfHeight = canvasSize / 2;
      ctx.translate(halfHeight, halfHeight);
      const radius = halfHeight * 0.9;
      const interval = setInterval(() => drawClock(ctx, radius), 1000);
      return () => clearInterval(interval);
    }
  }, [canvas, theme.palette.grey, canvasSize]);

  return (
    <ContentBox>
      <Typography variant="h4">HTML Canvas Animation</Typography>
      <Typography variant="h5">
        Untenstehend sind Beispiele für HTML Canvas Animation zu finden
      </Typography>
      <br></br>
      <Typography variant="h6">HTML Canvas Analog Uhr</Typography>
      <Card className={classes.card} variant="outlined">
        <canvas
          height={canvasSize}
          width={canvasSize}
          className={classes.canvas}
          ref={canvas}
        ></canvas>
      </Card>
    </ContentBox>
  );
};

export default HtmlCanvas;
