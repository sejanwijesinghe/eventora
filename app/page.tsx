import ExploreBtn from "@/components/ExploreBtn";

const Page = () => {
    return (
        <section>
            <h1 className="text-center">Your Gateway to Every <br /> Must‑Attend Dev Event</h1>

            <p className="text-center mt-5"> Discover, Connect, Elevate your developer journey</p>

            <ExploreBtn />

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {[1,2,3,4,5].map((event) => (
                        <li key={event}>Event {event}</li>
                    ))}
                </ul>
            </div>
        </section>

    )
}
export default Page
