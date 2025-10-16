import { usePage } from '@inertiajs/react';

export default function Index() {
    const { type, posts } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="mx-auto max-w-6xl px-6">
                <h1 className="mb-6 text-center text-4xl font-bold text-red-700 uppercase">
                    {type === 'news' ? 'News & Updates' : 'Events'}
                </h1>

                {posts.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No {type} available at the moment.
                    </p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <a
                                key={post.id}
                                href={`/posts/${type}/${post.slug}`}
                                className="block overflow-hidden rounded-lg bg-white shadow transition-all duration-300 hover:shadow-lg"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-bold text-gray-800">
                                        {post.title}
                                    </h2>
                                    <p className="mt-1 line-clamp-3 text-sm text-gray-500">
                                        {post.description}
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-red-700">
                                        View →
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
