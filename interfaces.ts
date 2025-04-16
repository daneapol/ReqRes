export interface ListUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface CRUDUser {
    name: string;
    job: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
};