'use client';
import React, { ChangeEvent, useState } from 'react';

import { cn } from '@/utils/utils';
import { Checkbox, Image } from '@nextui-org/react';

import CardUI, { CardUIBody, CardUIHeader } from '../CardUI';

const response = [
	{
		title: 'The Way of the Kings',
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		order: 1,
		words: '383389',
		publishedOn: '2010.08.31',
		image:
			'/image/article/why-do-i-need-key-when-mapping-through-list-of-items-in-react/way-of-the-kings.jpg',
	},
	{
		title: 'Words of Radiance',
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		order: 2,
		words: '399431',
		publishedOn: '2014.03.04',
		image:
			'/image/article/why-do-i-need-key-when-mapping-through-list-of-items-in-react/words-of-radiance.jpg',
	},
	{
		title: 'Oathbringer',
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		order: 3,
		words: '451912',
		publishedOn: '2017.11.14',
		image:
			'/image/article/why-do-i-need-key-when-mapping-through-list-of-items-in-react/oathbringer.jpg',
	},
	{
		title: 'Rythm of War',
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		order: 4,
		words: '455891',
		publishedOn: '2020.11.17',
		image:
			'/image/article/why-do-i-need-key-when-mapping-through-list-of-items-in-react/rythm-of-war.jpg',
	},
	{
		title: 'Knights of Wind and Truth',
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		order: 5,
		words: '400000',
		publishedOn: '',
		image:
			'/image/article/why-do-i-need-key-when-mapping-through-list-of-items-in-react/szeth.webp',
	},
	{
		title: 'Mistborn: The Final Empire',
		author: 'Brandon Sanderson',
		series: 'Mistborn',
		order: 1,
		words: '214000',
		publishedOn: '2006-07-17',
		image:
			'/image/article/why-do-i-need-key-when-mapping-through-list-of-items-in-react/mistborn-final-empire.jpg',
	},
];

const Book = React.memo(function Book({
	book,
}: {
	book: (typeof response)[0];
}) {
	console.info('Rendering book: ', book.title);
	return (
		<CardUI key={book.title} className="max-w-[300px]">
			<CardUIHeader className="font-semibold font-heading tracking-widest flex gap-2 flex-row justify-center items-center">
				{book.title}
			</CardUIHeader>
			<CardUIBody className="flex flex-col">
				<Image
					src={book?.image}
					alt={book?.title}
					classNames={{
						wrapper: 'self-center',
						img: 'object-cover aspect-square w-full max-h-[210px] ',
					}}
				/>
				<ul>
					{Object.entries(book).map(([key, value]) => {
						if (key === 'title' || key === 'image') return;
						return (
							<li key={key}>
								<span className="font-semibold">{key}</span>:{' '}
								<span className="">{value}</span>
							</li>
						);
					})}
				</ul>
			</CardUIBody>
		</CardUI>
	);
});

const BookList = ({ items = [] }: { items: typeof response | [] }) => {
	const [books, setBooks] = useState(items);
	const [seriesFilter, setSeriesFilter] = useState(['Stormlight Archive']);

	const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
		const seriesName = e.target.value;

		let newSeriesFilter = [...seriesFilter];
		const filterIndex = newSeriesFilter.findIndex(
			(element) => element === seriesName,
		);
		if (filterIndex !== -1) {
			newSeriesFilter.splice(filterIndex, 1);
		} else {
			newSeriesFilter.push(seriesName);
		}

		setSeriesFilter(newSeriesFilter);
	};

	return (
		<>
			<div className="mb-4 text-lg rounded-theme-default bg-theme-light-background-secondary p-4 max-w-fit">
				<Checkbox
					id="stormlight"
					name="series"
					value={'Stormlight Archive'}
					onChange={handleFilterChange}
					size="lg"
					isSelected={
						seriesFilter.find((item) => item === 'Stormlight Archive') !==
						undefined
							? true
							: false
					}
					classNames={{
						wrapper: cn('bg-white'),
					}}
				/>
				<label htmlFor="stormlight" className="me-4">
					Stormlight
				</label>
				<Checkbox
					id="mistborn"
					name="series"
					value="Mistborn"
					className=""
					classNames={{
						wrapper: cn('bg-white'),
					}}
					onChange={handleFilterChange}
					size="lg"
					isSelected={
						seriesFilter.find((item) => item === 'Mistborn') !== undefined
							? true
							: false
					}
				/>
				<label htmlFor="mistborn">Mistborn</label>
			</div>
			<ul
				className={`grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4`}
			>
				{books
					.filter((book) => seriesFilter.includes(book.series))
					.map((book) => (
						<Book book={book} key={book.title} />
					))}
			</ul>
		</>
	);
};

export default function BooksSandbox() {
	return (
		<div className="mb-8">
			<h1 className="mb-4">Example</h1>
			<BookList items={response} />
		</div>
	);
}
