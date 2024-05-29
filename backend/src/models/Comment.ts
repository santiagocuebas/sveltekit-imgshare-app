import type { IComment } from '../types/global.js';
import { Entity, Column } from 'typeorm';
import { Content } from './abstract/Content.js';

@Entity()
export class Comment extends Content implements IComment {
	@Column('varchar')
	public imageId!: string;

	@Column('varchar')
	public imageDir!: string;

	@Column('varchar')
	public receiver!: string;

	@Column('varchar', { length: 4200, default: '' })
	public comment!: string;

	@Column('boolean', { default: false })
	public edit!: boolean;
}
