/* Defines the user entity */
import { UserObj } from "../user";

export interface AppointmentObj {
    id: number;
    date: Date;
    description: string;
    patient: UserObj;
    confirmed: string;
    doctorUsername: string;
}