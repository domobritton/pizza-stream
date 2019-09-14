import Process from '../images/process-icon.svg';
import Make from '../images/make-icon.svg';
import Deliver from '../images/deliver-icon.svg';

export const items = [
  {
    id: 1,
    status: 'Processing your order',
    message: "Checkin' it twice",
    active: true,
    completed: false,
    mobile: true,
    img: Process
  },
  {
    id: 2,
    status: 'Making the pizza',
    message: "Kneadin', shapin', bakin'",
    active: false,
    completed: false,
    mobile: false,
    img: Make
  },
  {
    id: 3,
    status: 'Delivering your pizza',
    message: "Deliverin'",
    active: false,
    completed: false,
    mobile: false,
    img: Deliver
  }
];
