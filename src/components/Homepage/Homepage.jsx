import Link from 'next/link';
import React from 'react';

const Homepage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const allPost = await res.json();
    return (
        <div className='min-h-screen'>
            <div className='grid grid-cols-4 gap-5 py-5'>
                
                {
                    allPost?.map(post => <div key={post.id} className='p-3 bg-blue-400'>
                        <Link href={`/blog/${post.id}`}><h2>{post.title}</h2></Link>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Homepage;