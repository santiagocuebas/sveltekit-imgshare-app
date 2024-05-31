import type { IImage } from '../types/global.js';
import { Entity, Column } from 'typeorm';
import { Content } from './abstract/Content.js';

@Entity()
export class Image extends Content implements IImage {
	@Column('varchar', { unique: true, nullable: false })
	public filename!: string;

	@Column('varchar', { length: 40, nullable: false })
	public title!: string;

	@Column('varchar', { length: 4200, default: '' })
	public description!: string;

	@Column('boolean', { default: true })
	public isPublic!: boolean;

	@Column({ default: 0 })
	public views!: number;

	@Column('text', { array: true, default: {} })
	public favorites!: string[];

	@Column('text', { array: true, default: {} })
	public totalComments!: string[];
}
