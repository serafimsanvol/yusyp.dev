import React from 'react';

const Send = ({
  width = 34,
  height = 34,
  fill = '#F2F2F2',
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.83646 1.87623L5.80679 1.85974C5.6212 1.75658 5.4281 1.64925 5.26267 1.57563C5.11859 1.51151 4.77554 1.36481 4.37218 1.44648C3.93294 1.53542 3.56282 1.82927 3.3766 2.23691C3.2056 2.61124 3.27069 2.97862 3.30047 3.13349C3.33466 3.3113 3.39542 3.52371 3.45381 3.72785L3.46314 3.7605L4.14534 6.14759L4.1915 6.3093C4.5352 7.51376 4.77266 8.34596 5.24604 9.02836C5.66329 9.62986 6.20753 10.1324 6.84032 10.5005C7.55822 10.9181 8.40666 11.0886 9.63464 11.3354L9.63466 11.3354L9.79952 11.3685L12.9349 12L9.79952 12.6314L9.63465 12.6645C8.40667 12.9113 7.55822 13.0818 6.84032 13.4994C6.20753 13.8675 5.66329 14.37 5.24604 14.9715C4.77266 15.654 4.53519 16.4862 4.1915 17.6906L4.14534 17.8523L3.46314 20.2394L3.45381 20.272C3.39542 20.4762 3.33466 20.6886 3.30047 20.8664C3.27069 21.0213 3.2056 21.3887 3.3766 21.763C3.56282 22.1706 3.93294 22.4645 4.37218 22.5534C4.77554 22.6351 5.11859 22.4884 5.26267 22.4243C5.42811 22.3507 5.62123 22.2433 5.80683 22.1401L5.83646 22.1237L19.9681 14.2728L20.0055 14.252C20.3843 14.0416 20.7268 13.8514 20.9877 13.6734C21.2508 13.4939 21.5778 13.2333 21.7626 12.8255C22.0003 12.3008 22.0003 11.6991 21.7626 11.1744C21.5778 10.7667 21.2508 10.506 20.9877 10.3265C20.7268 10.1485 20.3843 9.95832 20.0055 9.74789L19.9681 9.72714L5.83646 1.87623Z"
        fill={fill}
      />
    </svg>
  );
};

export default Send;