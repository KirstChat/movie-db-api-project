const voteAverageColor = (vote_average, vote_count) => {
  if (vote_average === 0 && vote_count === 0) {
    return <span className='average'>--</span>;
  } else if (vote_average <= 4.9) {
    return <span className='average average-red'>{vote_average * 10}%</span>;
  } else if (vote_average <= 6.9) {
    return <span className='average average-orange'>{vote_average * 10}%</span>;
  } else {
    return <span className='average average-green'>{vote_average * 10}%</span>;
  }
};

export default voteAverageColor;
