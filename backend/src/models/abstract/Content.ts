import type { IContent } from '../../global.js';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn
} from 'typeorm';

@Entity()
export abstract class Content extends BaseEntity implements IContent {
	@PrimaryColumn('varchar')
	public id!: string;
	
	@Column('varchar', { nullable: false })
	public author!: string;

	@Column('varchar', { default: 'default.png' })
	public avatar!: string;

	@Column('simple-array')
	public likes!: string[];

	@Column('simple-array')
	public dislikes!: string[];

	@CreateDateColumn()
	public createdAt!: Date;
}