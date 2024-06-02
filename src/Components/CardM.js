import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function RecipeReviewCard({ el }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDoubleClick = () => {
    alert("Div was double-clicked!");
  };
  const [like, setLike] = useState();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={el.title}
        subheader={el.date}
      />
      <CardMedia
        onClick={() => setLike(!like)}
        className={like ? "heart" : "heart2"}
        component="img"
        height="194"
        image={el.posterUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {el.description}
        </Typography>
        <div>
          <button onDoubleClick={() => setLike(!like)}>hello</button>
        </div>
      </CardContent>
      <div className="bottomCard">
        <div className="heartAndShare">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              onClick={() => setLike(!like)}
              className={like ? "heart" : "heart2"}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
        <Typography variant="body2" color="text.secondary">
          {el.prix}€ par nuit
        </Typography>
      </div>
    </Card>
  );
}
