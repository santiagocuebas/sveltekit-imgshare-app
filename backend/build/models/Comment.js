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
let Comment = class Comment extends Content {
    imageId;
    imageDir;
    receiver;
    comment;
    edit;
};
__decorate([
    Column('varchar'),
    __metadata("design:type", String)
], Comment.prototype, "imageId", void 0);
__decorate([
    Column('varchar'),
    __metadata("design:type", String)
], Comment.prototype, "imageDir", void 0);
__decorate([
    Column('varchar'),
    __metadata("design:type", String)
], Comment.prototype, "receiver", void 0);
__decorate([
    Column('text'),
    __metadata("design:type", String)
], Comment.prototype, "comment", void 0);
__decorate([
    Column('boolean', { default: false }),
    __metadata("design:type", Boolean)
], Comment.prototype, "edit", void 0);
Comment = __decorate([
    Entity()
], Comment);
export { Comment };
