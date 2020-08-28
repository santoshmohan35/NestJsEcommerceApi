import { ApiProperty } from '@nestjs/swagger';


export class Users {
    id: number;
    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname: string;
    @ApiProperty()
    password: string;

    @ApiProperty()
    mobile: string;

    @ApiProperty()
    email: string;
}