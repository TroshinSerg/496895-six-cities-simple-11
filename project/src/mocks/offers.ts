type Offer = {
  id: number;
  mark?: string;
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  price: number;
  rating: number;
  name: string;
  type: string;
}

const offers: Offer[] = [
  {
    id: 1,
    mark: 'Premium',
    img: {
      src: 'img/apartment-01.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 120,
    rating: 80,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    img: {
      src: 'img/room.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 80,
    rating: 80,
    name: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 3,
    img: {
      src: 'img/apartment-02.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 132,
    rating: 80,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    mark: 'Premium',
    img: {
      src: 'img/apartment-03.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 180,
    rating: 100,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 5,
    img: {
      src: 'img/room.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 80,
    rating: 80,
    name: 'Wood and stone place',
    type: 'Private room',
  }
];

export {offers}
