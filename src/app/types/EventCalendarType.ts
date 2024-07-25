import { Moment, MomentInput } from "moment";
import { ReactNode } from "react";

export type DaysGrid = {
    no: number;
    date: Moment;
}

export type Event = {
    _id: number;
    title: string;
    content: string;
    url: string;
    date: Moment; // | Date 
}
// export type Events_definition = {
//     id: number,
//     title: string,
//     content: string,
//     date: string,
//     userId: string,
// }

export type EventsData = Array<Event>;