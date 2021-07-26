import React, {Fragment} from "react";
import {getFilteredEvents} from "../../dummy-data";
import {useRouter} from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert/error-alert";

const FilteredEventPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return <p className='center'>Loading...</p>;
    }
    const filterYear = filterData[0];
    const filterMonth = filterData[1];

    const numYear = +filterYear;
    const numMonth = +filterMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link='/events'>All Events</Button>
            </div>
        </Fragment>
    }

    const filterEvents = getFilteredEvents({year: numYear, month: numMonth});

    if (!filterEvents || filterEvents.length === 0) {
        return <Fragment>
            <ErrorAlert>
                No events found for the chosen filter!
            </ErrorAlert>
        </Fragment>
    }

    const date = new Date(numYear, numMonth - 1);

    return <Fragment>
        <ResultsTitle date={date}/>
        <EventList events={filterEvents}/>
    </Fragment>;
}

export default FilteredEventPage;