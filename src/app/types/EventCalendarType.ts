import { Moment, MomentInput } from "moment";
import { ReactNode } from "react";

export type DaysGrid = {
    no: number;
    date: Moment;
}

export type Event = {
    id: number;
    title: string;
    popupContent: ReactNode | ReactNode[];
    date: Moment; // | Date 
    color?: string;
}

export type EventsData = Array<Event>;