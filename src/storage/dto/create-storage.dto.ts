//import Item from '../../items/dto/create-item.dto';

export class CreateStorageDto {
    id: string;
    name: string;
    urlName: string;
    type: string;
    phoneNumber: string;
    email: string;
    //socialMedias: string[];
    socialMedia: string;
    additionalInfo: string;
    //addresses: string[];
    address: string;
    city: string;
    code: string;
    //items: Item[];
}
