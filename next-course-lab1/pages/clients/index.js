import Link from 'next/link'

function ClientProjectPage() {
    return (<div>

        <h1>The Project given by  client</h1>
        <ul>
            <li><Link href="/clients/max1">max1</Link>
            </li>
            <li><Link href="/clients/max2">max2</Link>
            </li>
        </ul>
    </div>


    );
}
export default ClientProjectPage;