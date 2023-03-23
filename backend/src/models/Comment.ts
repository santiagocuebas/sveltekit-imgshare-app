import { Entity, Column } from 'typeorm';
import { Content } from './abstract/Content.js';
import { IComment } from '../global.js';

@Entity()
export class Comment extends Content implements IComment {
	@Column('varchar')
	public imageId!: string;

	@Column('varchar')
	public imageDir!: string;

	@Column('varchar')
	public receiver!: string;

	@Column('text')
	public comment!: string;
	
	@Column('boolean', { default: false })
	public edit!: boolean;
}
