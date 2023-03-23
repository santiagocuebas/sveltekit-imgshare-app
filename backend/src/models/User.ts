import {
	Entity,
	BaseEntity,
	Column,
	PrimaryColumn,
	CreateDateColumn
} from 'typeorm';
import { IUser } from '../global.js';
import { UserRole } from '../enums.js';

@Entity()
export class User extends BaseEntity implements IUser {
	@PrimaryColumn('varchar', { length: 40 })
	public username!: string;

	@Column('varchar', {
		length: 100,
		unique: true,
		nullable: false
	})
	public email!: string;
	
	@Column('varchar', { nullable: false })
	public password!: string;
	
	@Column('varchar', { default: 'default.png' })
	public avatar!: string;
	
	@Column('text')
	public description!: string;
	
	@Column('enum', {
		enum: UserRole,
		default: UserRole.EDITOR
	})
	public role!: UserRole;
	
	@Column('int', { default: 0 })
	public totalViews!: number;
	
	@Column('text')
	public links!: string;

	@CreateDateColumn()
	public createdAt!: Date;
}
