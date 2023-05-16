import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Notifications(){
	return (
		<Layout>
			<h1 className='text-6xl mb-4 text-gray-300'>
				Notifications
			</h1>
			<Card noPadding={true}>
				<div className=''>
					<div className='flex gap-2 items-center border-b border-b-gray-100 p-4'>
						<Link href={'/profile'}>
							<Avatar />
						</Link>
						<div>
							<Link href={'/profile'} className={'font-semibold hover:underline mr-1'}>John Doe</Link>
							liked 
							<Link href={''} className={'text-socialBlue hover:underline ml-1'}>your photo</Link> 
						</div>
					</div>
					<div className='flex gap-2 items-center border-b border-b-gray-100 p-4'>
						<Link href={'/profile'}>
							<Avatar />
						</Link>
						<div>
							<Link href={'/profile'} className={'font-semibold hover:underline mr-1'}>John Doe</Link>
							liked 
							<Link href={''} className={'text-socialBlue hover:underline ml-1'}>your photo</Link> 
						</div>
					</div>
					<div className='flex gap-2 items-center border-b border-b-gray-100 p-4'>
						<Link href={'/profile'}>
							<Avatar />
						</Link>
						<div>
							<Link href={'/profile'} className={'font-semibold hover:underline mr-1'}>John Doe</Link>
							liked 
							<Link href={''} className={'text-socialBlue hover:underline ml-1'}>your photo</Link> 
						</div>
					</div>
				</div>
			</Card>
		</Layout>
	)
}