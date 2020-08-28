import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UsersService } from "src/modules/users/users.service";
import { Observable } from "rxjs";


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private userService: UsersService, private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        console.log(roles);
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        console.log(request);
        const user = request.user;
        return false;

    }
}