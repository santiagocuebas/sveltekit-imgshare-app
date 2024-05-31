import type { ILink, IUser } from '../types/global.js';
import {
	Entity,
	BaseEntity,
	Column,
	PrimaryColumn,
	CreateDateColumn
} from 'typeorm';
import { UserRole } from '../types/enums.js';

@Entity()
export class User extends BaseEntity implements IUser {
	@PrimaryColumn('varchar', { nullable: false, length: 40 })
	public username!: string;

	@Column('varchar', {
		length: 100,
		unique: true,
		nullable: false
	})
	public email!: string;

	@Column('varchar', { nullable: false })
	public password!: string;

	@Column('varchar', { default: 'https://res.cloudinary.com/dnu1qjhqz/image/upload/v1705406837/imgshare/avatar/default.png' })
	public avatar!: string;

	@Column('text', { default: '' })
	public description!: string;

	@Column('enum', {
		enum: UserRole,
		default: UserRole.EDITOR
	})
	public role!: UserRole;

	@Column({ default: 0 })
	public totalViews!: number;

	@Column('jsonb', { nullable: false, default: '[]' })
	public links!: ILink[];

	@CreateDateColumn()
	public createdAt!: Date;
}
