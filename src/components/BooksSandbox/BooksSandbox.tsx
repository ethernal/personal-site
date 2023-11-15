'use client';
import React, { ChangeEvent, useState } from 'react';

import { cn } from '@/utils/utils';
import { CardHeader, Checkbox, CheckboxGroup, Image } from '@nextui-org/react';

import CardUI, { CardUIBody, CardUIHeader } from '../CardUI';

const response = [
	{
		title: 'The Way of the Kings',
		order: 1,
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		words: '383389',
		publishedOn: '2010.08.31',
		image:
			'/image/article/using-key-when-mapping-through-list-of-items-in-react/way-of-the-kings.jpg',
	},
	{
		title: 'Words of Radiance',
		order: 2,
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		words: '399431',
		publishedOn: '2014.03.04',
		image:
			'/image/article/using-key-when-mapping-through-list-of-items-in-react/words-of-radiance.jpg',
	},
	{
		title: 'Oathbringer',
		order: 3,
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		words: '451912',
		publishedOn: '2017.11.14',
	},
	{
		title: 'Rythm of War',
		order: 4,
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		words: '455891',
		publishedOn: '2020.11.17',
	},
	{
		title: 'Knights of Wind and Truth',
		order: 5,
		author: 'Brandon Sanderson',
		series: 'Stormlight Archive',
		words: '400000',
		publishedOn: '',
	},
	{
		title: 'Mistborn: The Final Empire',
		order: 1,
		author: 'Brandon Sanderson',
		series: 'Mistborn',
		words: '214000',
		publishedOn: '2006-07-17',
	},
];

const Book = React.memo(function Book({
	book,
}: {
	book: (typeof response)[0];
}) {
	console.log('Rendering book: ', book.title);
	return (
		<CardUI key={book.title} className="max-w-[120px]">
			<CardUIHeader>{book.title}</CardUIHeader>
			<CardUIBody className="flex flex-col">
				<Image
					src={book?.image}
					alt={book?.title}
					classNames={{
						img: 'object-cover aspect-square w-full',
					}}
				/>
				<ul>
					{Object.entries(book).map(([key, value]) => {
						if (key === 'title') return;
						return (
							<li key={key}>
								{key}: {value}
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
				className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4`}
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
		<div className="App">
			<h1 className="mb-4">Example</h1>
			<BookList items={response} />
		</div>
	);
}
