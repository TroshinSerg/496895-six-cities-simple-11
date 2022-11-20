import {SyntheticEvent} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {changeCityAction, getOffersAction} from '../../store/action';

type TLocationProps = {
  cityName: string;
  isActive: boolean;
}

function Location({cityName, isActive} : TLocationProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const modifierClassName = isActive ? ' tabs__item--active' : '';
  const locationClassName = `locations__item-link tabs__item${modifierClassName}`;

  const handleLocationItemClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(changeCityAction(cityName));
    dispatch(getOffersAction());
  };

  return (
    <li className="locations__item">
      <a className={locationClassName} onClick={handleLocationItemClick} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default Location;