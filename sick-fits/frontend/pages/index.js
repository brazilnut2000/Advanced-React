import Link from 'next/link';

const Home = props => (
    <div>
        <p>Howdy from the stateless functional component home page.</p>
        <Link href="/sell">
            <a>Sell!</a>
        </Link>
    </div>
)

export default Home;