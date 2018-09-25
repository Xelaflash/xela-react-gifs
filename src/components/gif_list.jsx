import React from 'react';


import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

// same but with destructuring props into variables

// const Giflist = ({ gifs, selectGif }) => {
//   return (
//     <div className="gif-list">
//       {gifs.map( ({ gif }) => <Gif id={id} key={id} selectGif={selectGif} />)}
//     </div>
//   );
// };


export default GifList;
