import { Moment } from 'moment';
import { IUser } from 'app/core/user/user.model';

export interface IPoints {
  id?: number;
  date?: Moment;
  mind?: number;
  motive?: number;
  motion?: number;
  profileImageContentType?: string;
  profileImage?: any;
  weeklyGoal?: number;
  user?: IUser;
}

export class Points implements IPoints {
  constructor(
    public id?: number,
    public date?: Moment,
    public mind?: number,
    public motive?: number,
    public motion?: number,
    public profileImageContentType?: string,
    public profileImage?: any,
    public weeklyGoal?: number,
    public user?: IUser
  ) {}
}
