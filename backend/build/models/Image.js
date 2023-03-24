var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column } from 'typeorm';
import { Content } from './abstract/Content.js';
let Image = class Image extends Content {
    filename;
    title;
    description;
    isPublic;
    views;
    totalComments;
    favorite;
};
__decorate([
    Column('varchar', { unique: true, nullable: false }),
    __metadata("design:type", String)
], Image.prototype, "filename", void 0);
__decorate([
    Column('varchar', { length: 40, nullable: false }),
    __metadata("design:type", String)
], Image.prototype, "title", void 0);
__decorate([
    Column('text'),
    __metadata("design:type", String)
], Image.prototype, "description", void 0);
__decorate([
    Column('boolean', { default: true }),
    __metadata("design:type", Boolean)
], Image.prototype, "isPublic", void 0);
__decorate([
    Column('int', { default: 0 }),
    __metadata("design:type", Number)
], Image.prototype, "views", void 0);
__decorate([
    Column('int', { default: 0 }),
    __metadata("design:type", Number)
], Image.prototype, "totalComments", void 0);
__decorate([
    Column('simple-array'),
    __metadata("design:type", Array)
], Image.prototype, "favorite", void 0);
Image = __decorate([
    Entity()
], Image);
export { Image };
