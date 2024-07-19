import classes from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ src, date, title, url }) => {
  return (
    <div className={classes.itemCard}>
      <Link to={url}>
        <img
          className={classes.itemCardImg}
          src={src ? src : "../assets/news-image.webp"}
          alt={title}
        />
      </Link>
      <div className={classes.itemInfo}>
        <div className={classes.uploadedDate}>{date}</div>
        <Link to={url}>
          <h5 className={classes.itemTitle}>{title}</h5>
        </Link>
      </div>
    </div>
  );
};

// const Item = () => {
//   const newsState = useSelector((state) => state.news.newsState);

//   return (
//     <>
//       {newsState.map((news, index) => {
//         return (
//           <div key={index} className={classes.itemCard}>
//             <Link to={`/news/${index}`}>
//               <img
//                 src={news.urlToImage}
//                 alt={news.title}
//                 className={classes.itemCardImg}
//               />
//             </Link>
//             <div className={classes.itemInfo}>
//               <div className={classes.uploadedDate}>{news.publishedAt}</div>
//               <Link to={`/news/${index}`}>
//                 <h5 className={classes.itemTitle}>{news.title}</h5>
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const Item = ({ src, date, title, url }) => {
//   return (
// 	<div className={classes.itemCard}>
// 	<img className={classes.itemCardImg} src={src} alt="item" />
// 	<div className={classes.itemInfo}>
// 		<div className={classes.uploadedDate}>{date}</div>
// 		<h5 className={classes.itemTitle}>{title}</h5>
// 	</div>
// </div>
//   );
// };

export default Item;
