export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    token?: string;
}
export class UserRegistration {
    firstName: string;
    lastName: string;
    fullName: string;
    gender: string;
    userStatus: string;
    verified: boolean;
    termsAndConditions: string;
    dateOfBirth: string;
    mobile: string;
    email: string;
    token?: string;
}

// "first_name": "Piedd",
//     "last_name": "Cro",
//         "full_name": "PieddCro",
//             "gender": "male",
//                 "user_status": "new",
//                     "verified": false,
//                         "terms_and_conditions": true,
//                             "date_of_birth": "19/04/1994",
//                                 "email": "zavelyves@gmail.com",
//                                     "password": "123456"
