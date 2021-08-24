import { getCustomRepository } from 'typeorm';
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute( {name, email, admin}: IUserRequest ){
        const userRepository = getCustomRepository(UserRepositories);

        if(!email){
            throw new Error('E-mail incorrect');
        }
        
        if(!name){
            throw new Error('Name incorrect');
        }

        const userAlreadyExists = await userRepository.findOne( {
            email
        } );

        if( userAlreadyExists ){
            throw new Error('Email already used');
        }

        const user = userRepository.create({
            name,
            email,
            admin
        });

        await userRepository.save(user);

        return user;

    }

}

export { CreateUserService };