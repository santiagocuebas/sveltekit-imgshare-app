import type { IImage } from '../global.js';
import { Entity, Column } from 'typeorm';
import { Content } from './abstract/Content.js';

@Entity()
export class Image extends Content implements IImage {
	@Column('varchar', { unique: true, nullable: false })
	public filename!: string;

	@Column('varchar', { length: 40, nullable: false })
	public title!: string;

	@Column('text')
	public description!: string;

	@Column('boolean', { default: true })
	public isPublic!: boolean;

	@Column('int', { default: 0 })
	public views!: number;

	@Column('int', { default: 0 })
	public totalComments!: number;
	
	@Column('simple-array')
	public favorites!: string[];
}
