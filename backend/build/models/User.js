var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { UserRole } from '../enums.js';
let User = class User extends BaseEntity {
    username;
    email;
    password;
    avatar;
    description;
    role;
    totalViews;
    links;
    createdAt;
};
__decorate([
    PrimaryColumn('varchar', { length: 40 }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Column('varchar', {
        length: 100,
        unique: true,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column('varchar', { nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Column('varchar', { default: 'default.png' }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    Column('text'),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    Column('enum', {
        enum: UserRole,
        default: UserRole.EDITOR
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    Column('int', { default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "totalViews", void 0);
__decorate([
    Column('text'),
    __metadata("design:type", String)
], User.prototype, "links", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
User = __decorate([
    Entity()
], User);
export { User };
