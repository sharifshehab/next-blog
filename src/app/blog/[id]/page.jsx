import React from 'react';

const page = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json();
    const { title, body } = data || {}
    return (
        <div className='container mx-auto min-h-screen flex flex-col items-center justify-center'>
            <div className='text-center space-y-4'>
                <h2 className='text-4xl text-white font-medium capitalize underline underline-offset-8'>{title}</h2>
                <p className='text-center text-gray-800 text-lg'>{body}</p>
            </div>
        </div>
    );
};

export default page;