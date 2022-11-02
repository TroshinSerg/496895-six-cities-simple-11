import {RatingSetting} from '../../constants/constants';

type RatingProps = {
  className: string;
  number: number;
  isShowNumer?: boolean;
}

function Rating({className, number, isShowNumer}: RatingProps): JSX.Element {
  const ratingAsPercentage = (RatingSetting.MaxPercent / RatingSetting.StarCount) * Math.round(number);
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{width: `${ratingAsPercentage}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isShowNumer &&
      <span className={`${className}__rating-value rating__value`}>{number}</span>}
    </div>
  );
}
export default Rating;
