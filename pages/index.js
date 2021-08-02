import Link from 'next/link';

const page = () => {
    return (
        <div>
            <h1 className="title">Welcome to the SpaceX API</h1>
            <div className="indexContent">
                <Link href="/capsule"><h3>Capsules</h3></Link>
                <Link href="/history"><h3>History</h3></Link>
                <Link href="/info"><h3>Infos</h3></Link>
                <Link href="/landpads"><h3>Landing Pads</h3></Link>
                <Link href="/launches"><h3>Launches</h3></Link>
                <Link href="/launchpads"><h3>Launching Pads</h3></Link>
                <Link href="/mission"><h3>Missions</h3></Link>
                <Link href="/roadster"><h3>Roadster</h3></Link>
                <Link href="/rockets"><h3>Rockets</h3></Link>
                <Link href="/ship"><h3>Ships</h3></Link>
            </div>
        </div>
    );
};

export default page;