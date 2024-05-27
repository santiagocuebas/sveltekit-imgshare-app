import type { IContent } from '../../types/global.js';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
} from 'typeorm';

@Entity()
export abstract class Content extends BaseEntity implements IContent {
	@PrimaryColumn('varchar', { nullable: false })
	public id!: string;

	@Column('varchar', { nullable: false })
	public author!: string;

	@Column('varchar', { nullable: false })
	public avatar!: string;

	@Column('text', { array: true, default: {} })
	public likes!: string[];

	@Column('text', { array: true, default: {} })
	public dislikes!: string[];

	@CreateDateColumn()
	public createdAt!: Date;
}
