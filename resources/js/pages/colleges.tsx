import { Head, Link } from '@inertiajs/react';

interface College {
    src: string;
    name: string;
    description: string;
    link: string;
}

interface Props {
    colleges: College[];
}

export default function Colleges({ colleges }: Props) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Colleges" />

            <div className="mx-auto max-w-6xl px-4 py-10">
                <h1 className="mb-8 text-3xl font-bold text-red-800">
                    Our Colleges
                </h1>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {colleges.map((college, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl bg-white p-5 shadow-lg transition hover:shadow-xl"
                        >
                            <img
                                src={college.src}
                                alt={college.name}
                                className="h-40 w-full rounded-xl object-cover"
                            />
                            <h2 className="mt-4 text-xl font-semibold text-gray-800">
                                {college.name}
                            </h2>
                            <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                                {college.description}
                            </p>
                            <Link
                                href={college.link}
                                className="mt-4 inline-block font-semibold text-red-700 hover:underline"
                            >
                                Learn more →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
