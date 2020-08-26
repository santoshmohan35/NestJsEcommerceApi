import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getAllUsers(): any {
        return {
            users: [
                {
                    userId: 1,
                    firstName: 'santosh',
                    lastName: 'routray',
                    company: 'UNVIRED'
                },{
                    userId: 4,
                    firstName: 'Rahul',
                    lastName: 'Sharma',
                    company: 'UNVIRED'
                }
            ]
        }

    }
}
