import UserDataModel from './userDataModel';

class BookingDataModel {
  user: UserDataModel;
  bookingStart: Date;
  bookingEnd: Date;
  startHour: Number;
  duration: Number;
  purpose: String;
}

export default BookingDataModel;
