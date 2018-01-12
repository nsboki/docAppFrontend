/* Defines the user entity */
import { UserObj } from "../user";

export class AppointmentObj {
    constructor(
    id: number,
    date: Date,
    description: string,
    patient: UserObj,
    confirmed: string,
    doctorUsername: string) {}
}