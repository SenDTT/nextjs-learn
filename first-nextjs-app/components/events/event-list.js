import EventItem from "./event-item";
import React from "react";
import classes from '../../styles/event-list.module.css';

const EventList = ({events}) => {
    return <ul className={classes.list}>
        {
            events.map(event =>
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    image={event.image}
                    date={event.date}/>
            )
        }
    </ul>
};

export default EventList;