import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/types';
import {useState} from 'react';

type OffersListProps = {
  offers: Offer[];
  isOffersEmpty: boolean;
}

function OffersList({offers, isOffersEmpty}: OffersListProps): JSX.Element {
  const [, setCardId] = useState('');

  const cardMouseOverHandle = (id: string) => {
    setCardId(id);
  };

  return (
    <div className="cities">
      {!isOffersEmpty &&
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer) => <OfferCard key={offer.id} onCardHover={cardMouseOverHandle} offer={offer} />)}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>}
      {isOffersEmpty &&
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>}
    </div>
  );
}

export default OffersList;
