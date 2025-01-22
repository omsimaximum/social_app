import CreatePost from '@/components/CreatePost';
import { currentUser } from '@clerk/nextjs/server';

export default async function Home() {
	const user = await currentUser();
	return (
		<div className='grid grid-cols-1 gap-6 lg:grid-cols-10'>
			<div className='lg:col-span-6'>{user ? <CreatePost /> : 'login'}</div>

			<div className='sticky top-20 hidden lg:col-span-4 lg:block'>WhoToFollow?</div>
		</div>
	);
}
