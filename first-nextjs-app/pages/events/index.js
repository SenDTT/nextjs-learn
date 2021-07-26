import { getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import React, {Fragment} from "react";
import EventSearch from "../../components/events/event-search";
import { useRouter} from "next/router";

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler} />
            <EventList events={events} />
        </Fragment>
    );
}

export default AllEventsPage;