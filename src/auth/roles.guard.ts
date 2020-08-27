import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UsersService } from "src/modules/users/users.service";
import { Observable } from "rxjs";
import { Users } from "src/modules/users/users.model";
import {pipe} from 'rxjs';


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private userService: UsersService, private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user:Users = request.user;

    }
}