import {useRouter} from 'next/router';

function SelectedClientProjectPage() {
    const router =useRouter();
   console.log(router.query);
    return (<div>

        <h1>The Project given by  client Project ID</h1>
    </div>


    );
}
export default SelectedClientProjectPage;