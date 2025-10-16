import { Head, Link, usePage } from '@inertiajs/react';

export default function Show() {
    const { post } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title={post.title} />

            {/* Header */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <span className="mb-2 rounded bg-red-700 px-3 py-1 text-sm uppercase">
                        {post.type === 'news' ? 'News & Updates' : 'Event'}
                    </span>
                    <h1 className="text-3xl font-bold md:text-4xl">
                        {post.title}
                    </h1>
                    <p className="mt-2 text-sm opacity-90">{post.date}</p>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-6 py-12">
                <p className="mb-8 leading-relaxed text-gray-700">
                    {post.description}
                </p>

                <Link
                    href={`/posts/${post.type}`}
                    className="inline-block rounded bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800"
                >
                    ← Back to {post.type === 'news' ? 'News' : 'Events'}
                </Link>
            </div>
        </div>
    );
}
